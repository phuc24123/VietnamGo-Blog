// Admin Dashboard Functions
document.addEventListener('DOMContentLoaded', function() {
    checkAdminAuth();
    initializeAdminFeatures();
    setupLogout();
});

// Authentication & Initialization
function checkAdminAuth() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || currentUser.role !== 'admin') {
        window.location.href = '../login.html';
    }
    updateAdminInfo(currentUser);
}

function updateAdminInfo(user) {
    const usernameElements = document.querySelectorAll('.admin-username');
    const avatarElements = document.querySelectorAll('.admin-avatar');
    
    usernameElements.forEach(element => {
        element.textContent = user.username;
    });
    
    avatarElements.forEach(element => {
        element.src = user.avatar || '../images/default-avatar.jpg';
    });
}

function setupLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            window.location.href = '../login.html';
        });
    }
}

function initializeAdminFeatures() {
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'posts.html':
            initializePosts();
            break;
        case 'comments.html':
            initializeComments();
            break;
        case 'users.html':
            initializeUsers();
            break;
        case 'index.html':
        default:
            initializeDashboard();
    }
}

// Posts Management
function initializePosts() {
    displayPosts();
    setupPostModal();
}

function displayPosts() {
    const postsTableBody = document.getElementById('postsTableBody');
    if (!postsTableBody) return;

    postsTableBody.innerHTML = posts.map(post => `
        <tr>
            <td>${post.id}</td>
            <td>
                <div class="d-flex align-items-center">
                    <img src="../${post.image}" alt="${post.title}" width="50" height="50" class="rounded me-2">
                    ${post.title}
                </div>
            </td>
            <td>${getCategoryName(post.category)}</td>
            <td>${formatDate(post.publishedAt)}</td>
            <td>${post.views}</td>
            <td>${post.comments}</td>
            <td>
                <button class="btn btn-sm btn-primary me-1" onclick="editPost(${post.id})">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="deletePost(${post.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function setupPostModal() {
    const addPostBtn = document.getElementById('addPostBtn');
    const postForm = document.getElementById('postForm');
    const postModal = document.getElementById('postModal');

    if (addPostBtn) {
        addPostBtn.addEventListener('click', () => {
            postForm.reset();
            postForm.dataset.mode = 'add';
            showModal(postModal);
        });
    }

    if (postForm) {
        postForm.addEventListener('submit', handlePostSubmit);
    }
}

function handlePostSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const postData = {
        title: formData.get('title'),
        content: formData.get('content'),
        category: formData.get('category'),
        image: formData.get('image'),
        publishedAt: new Date().toISOString().split('T')[0],
        views: 0,
        comments: 0
    };

    if (e.target.dataset.mode === 'add') {
        postData.id = posts.length + 1;
        posts.push(postData);
    } else {
        const postId = parseInt(document.getElementById('postId').value);
        const index = posts.findIndex(p => p.id === postId);
        if (index !== -1) {
            posts[index] = { ...posts[index], ...postData };
        }
    }

    hideModal(document.getElementById('postModal'));
    displayPosts();
    showAlert('success', 'Đã lưu bài viết thành công!');
}

function editPost(id) {
    const post = posts.find(p => p.id === id);
    if (!post) return;

    const form = document.getElementById('postForm');
    const modal = document.getElementById('postModal');

    document.getElementById('postId').value = post.id;
    document.getElementById('postTitle').value = post.title;
    document.getElementById('postContent').value = post.content;
    document.getElementById('postCategory').value = post.category;
    document.getElementById('postImage').value = post.image;

    form.dataset.mode = 'edit';
    showModal(modal);
}

function deletePost(id) {
    if (confirm('Bạn có chắc chắn muốn xóa bài viết này?')) {
        const index = posts.findIndex(p => p.id === id);
        if (index !== -1) {
            posts.splice(index, 1);
            displayPosts();
            showAlert('success', 'Đã xóa bài viết thành công!');
        }
    }
}

// Comments Management
function initializeComments() {
    displayComments();
}

function displayComments() {
    const commentsTableBody = document.getElementById('commentsTableBody');
    if (!commentsTableBody) return;

    commentsTableBody.innerHTML = comments.map(comment => `
        <tr>
            <td>${comment.id}</td>
            <td>${comment.content}</td>
            <td>${users.find(u => u.id === comment.userId)?.username || 'Unknown'}</td>
            <td>${formatDate(comment.createdAt)}</td>
            <td>
                <span class="badge ${comment.isVisible ? 'bg-success' : 'bg-warning'}">
                    ${comment.isVisible ? 'Hiển thị' : 'Đã ẩn'}
                </span>
            </td>
            <td>
                <button class="btn btn-sm ${comment.isVisible ? 'btn-warning' : 'btn-success'} me-1" 
                        onclick="toggleCommentVisibility(${comment.id})">
                    <i class="bi ${comment.isVisible ? 'bi-eye-slash' : 'bi-eye'}"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteComment(${comment.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function toggleCommentVisibility(id) {
    const comment = comments.find(c => c.id === id);
    if (comment) {
        comment.isVisible = !comment.isVisible;
        displayComments();
        showAlert('success', `Đã ${comment.isVisible ? 'hiển thị' : 'ẩn'} bình luận!`);
    }
}

function deleteComment(id) {
    if (confirm('Bạn có chắc chắn muốn xóa bình luận này?')) {
        const index = comments.findIndex(c => c.id === id);
        if (index !== -1) {
            comments.splice(index, 1);
            displayComments();
            showAlert('success', 'Đã xóa bình luận thành công!');
        }
    }
}

// Users Management
function initializeUsers() {
    displayUsers();
    setupUserModal();
}

function displayUsers() {
    const usersTableBody = document.getElementById('usersTableBody');
    if (!usersTableBody) return;

    usersTableBody.innerHTML = users.map(user => `
        <tr>
            <td>${user.id}</td>
            <td>
                <img src="../${user.avatar || 'images/default-avatar.jpg'}" 
                     alt="${user.username}" 
                     width="40" height="40" 
                     class="rounded-circle">
            </td>
            <td>${user.username}</td>
            <td>
                <span class="badge ${user.role === 'admin' ? 'bg-danger' : 'bg-primary'}">
                    ${user.role === 'admin' ? 'Admin' : 'User'}
                </span>
            </td>
            <td>
                <button class="btn btn-sm btn-primary me-1" onclick="editUser(${user.id})">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteUser(${user.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function setupUserModal() {
    const addUserBtn = document.getElementById('addUserBtn');
    const userForm = document.getElementById('userForm');
    const userModal = document.getElementById('userModal');

    if (addUserBtn) {
        addUserBtn.addEventListener('click', () => {
            userForm.reset();
            userForm.dataset.mode = 'add';
            showModal(userModal);
        });
    }

    if (userForm) {
        userForm.addEventListener('submit', handleUserSubmit);
    }
}

function handleUserSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {
        username: formData.get('username'),
        role: formData.get('role'),
        avatar: formData.get('avatar')
    };

    if (formData.get('password')) {
        userData.password = formData.get('password');
    }

    if (e.target.dataset.mode === 'add') {
        userData.id = users.length + 1;
        users.push(userData);
    } else {
        const userId = parseInt(document.getElementById('userId').value);
        const index = users.findIndex(u => u.id === userId);
        if (index !== -1) {
            users[index] = { ...users[index], ...userData };
        }
    }

    hideModal(document.getElementById('userModal'));
    displayUsers();
    showAlert('success', 'Đã lưu thông tin người dùng thành công!');
}

function editUser(id) {
    const user = users.find(u => u.id === id);
    if (!user) return;

    const form = document.getElementById('userForm');
    const modal = document.getElementById('userModal');

    document.getElementById('userId').value = user.id;
    document.getElementById('username').value = user.username;
    document.getElementById('role').value = user.role;
    document.getElementById('avatar').value = user.avatar || '';

    form.dataset.mode = 'edit';
    showModal(modal);
}

function deleteUser(id) {
    const user = users.find(u => u.id === id);
    if (user.role === 'admin') {
        showAlert('error', 'Không thể xóa tài khoản admin!');
        return;
    }

    if (confirm('Bạn có chắc chắn muốn xóa người dùng này?')) {
        const index = users.findIndex(u => u.id === id);
        if (index !== -1) {
            users.splice(index, 1);
            displayUsers();
            showAlert('success', 'Đã xóa người dùng thành công!');
        }
    }
}

// Utility Functions
function showModal(modal) {
    if (modal) {
        modal.classList.add('show');
    }
}

function hideModal(modal) {
    if (modal) {
        modal.classList.remove('show');
    }
}

function formatDate(dateString) {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
}

function getCategoryName(category) {
    const categories = {
        'nature': 'Phong cảnh',
        'food': 'Ẩm thực',
        'culture': 'Văn hóa',
        'festival': 'Lễ hội'
    };
    return categories[category] || category;
}

function showAlert(type, message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed top-0 end-0 m-3`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    document.body.appendChild(alertDiv);
    setTimeout(() => alertDiv.remove(), 3000);
}

// Initialize Dashboard
function initializeDashboard() {
    updateDashboardStats();
    displayRecentPosts();
    displayRecentComments();
}

function updateDashboardStats() {
    const stats = {
        totalPosts: posts.length,
        totalComments: comments.length,
        totalUsers: users.length,
        totalViews: posts.reduce((sum, post) => sum + post.views, 0)
    };

    Object.entries(stats).forEach(([key, value]) => {
        const element = document.getElementById(key);
        if (element) element.textContent = value;
    });
}

function displayRecentPosts() {
    const recentPosts = posts
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        .slice(0, 5);

    const recentPostsList = document.getElementById('recentPosts');
    if (!recentPostsList) return;

    recentPostsList.innerHTML = recentPosts.map(post => `
        <div class="admin-card">
            <div class="admin-card-body">
                <div class="d-flex align-items-center">
                    <img src="../${post.image}" alt="${post.title}" width="50" height="50" class="rounded me-3">
                    <div>
                        <h6 class="mb-1">${post.title}</h6>
                        <small class="text-muted">${formatDate(post.publishedAt)}</small>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function displayRecentComments() {
    const recentComments = comments
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5);

    const recentCommentsList = document.getElementById('recentComments');
    if (!recentCommentsList) return;

    recentCommentsList.innerHTML = recentComments.map(comment => `
        <div class="admin-card">
            <div class="admin-card-body">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h6 class="mb-1">${users.find(u => u.id === comment.userId)?.username || 'Unknown'}</h6>
                        <p class="mb-1">${comment.content.substring(0, 100)}...</p>
                        <small class="text-muted">${formatDate(comment.createdAt)}</small>
                    </div>
                    <span class="badge ${comment.isVisible ? 'bg-success' : 'bg-warning'}">
                        ${comment.isVisible ? 'Hiển thị' : 'Ẩn'}
                    </span>
                </div>
            </div>
        </div>
    `).join('');
} 