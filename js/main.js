// Users data
const users = [
    { 
        id: 1, 
        username: 'admin', 
        password: 'admin123', 
        role: 'admin',
        avatar: 'images/obito.jpg',
        themeColor: '#34A853'
    },
    { 
        id: 2, 
        username: 'john_doe', 
        password: '123456', 
        role: 'user',
        avatar: 'images/wrxdie.jpg',
        themeColor: '#34A853'
    },
    { 
        id: 3, 
        username: 'jane_smith', 
        password: 'password', 
        role: 'user',
        avatar: 'images/mck.jpg',
        themeColor: '#DC3545'
    },
];

const posts = [
    {
        id: 1,
        title: 'Khám Phá Đà Lạt - Thành Phố Ngàn Hoa',
        excerpt: 'Đà Lạt nổi tiếng với khí hậu mát mẻ, những rừng thông bạt ngàn và những khu vườn hoa tuyệt đẹp.',
        content: 'Đà Lạt - thành phố ngàn hoa với khí hậu mát mẻ quanh năm là điểm đến lý tưởng cho những ai yêu thích thiên nhiên. Thành phố này nổi tiếng với những đồi thông xanh ngát, những vườn hoa đầy màu sắc như hoa hồng, hoa mimosa, và đặc biệt là hoa dã quỳ vào mùa cuối năm. Ngoài ra, Đà Lạt còn thu hút du khách bởi kiến trúc độc đáo của các biệt thự cổ, nhà thờ Domain de Marie, ga xe lửa cổ và chợ đêm sôi động. Ẩm thực Đà Lạt cũng là một điểm nhấn với bánh tráng nướng, lẩu bò, kem bơ và café view đẹp.',
        image: 'images/dalat.jpg',
        category: 'nature',
        author: {
            name: 'Nguyễn Văn A',
            avatar: 'images/author1.jpg'
        },
        publishedAt: '2024-04-01',
        views: 1500,
        comments: 25
    },
    {
        id: 2,
        title: 'Ẩm Thực Đường Phố Hội An',
        excerpt: 'Khám phá nền ẩm thực đa dạng và phong phú của phố cổ Hội An, từ mì Quảng đến cao lầu.',
        content: 'Hội An không chỉ nổi tiếng với kiến trúc cổ kính mà còn là thiên đường ẩm thực đường phố. Mì Quảng - món ăn đặc trưng với sợi mì vàng, thịt gà, tôm, trứng cút và nước dùng đậm đà. Cao lầu - món mì độc đáo chỉ có ở Hội An với sợi mì màu vàng nâu, thịt xá xíu, rau sống và bánh đa giòn. Hoành thánh - món điểm tâm được yêu thích với nhân tôm thịt thơm ngon. Bánh mì Phượng - được đánh giá là một trong những tiệm bánh mì ngon nhất Việt Nam. Và không thể không nhắc đến các món ngọt truyền thống như chè bắp và sữa đậu nành.',
        image: 'images/hoianfood.jpg',
        category: 'food',
        author: {
            name: 'Trần Thị B',
            avatar: 'images/author2.jpg'
        },
        publishedAt: '2024-03-28',
        views: 2000,
        comments: 30
    },
    {
        id: 3,
        title: 'Lễ Hội Áo Dài Huế 2024',
        excerpt: 'Trải nghiệm vẻ đẹp của áo dài truyền thống Việt Nam tại Festival Huế 2024.',
        content: 'Festival Huế 2024 mang đến cho du khách cơ hội chiêm ngưỡng vẻ đẹp của áo dài Việt Nam qua các buổi trình diễn đặc sắc. Sự kiện năm nay quy tụ hơn 300 người mẫu chuyên nghiệp và không chuyên, trình diễn những bộ sưu tập áo dài độc đáo từ các nhà thiết kế nổi tiếng. Điểm nhấn của lễ hội là bộ sưu tập "Huế - Kinh đô Áo dài" với những thiết kế kết hợp giữa truyền thống và hiện đại, sử dụng các họa tiết của cung đình Huế. Ngoài ra, du khách còn có thể tham gia các hoạt động như chụp ảnh áo dài tại các địa điểm di tích, học may áo dài truyền thống và thưởng thức các tiết mục nghệ thuật cung đình Huế.',
        image: 'images/hue.jpg',
        category: 'festival',
        author: {
            name: 'Lê Văn C',
            avatar: 'images/author3.jpg'
        },
        publishedAt: '2024-03-25',
        views: 1800,
        comments: 20
    },
    {
        id: 4,
        title: 'Văn Hóa Cà Phê Sài Gòn',
        excerpt: 'Khám phá văn hóa cà phê độc đáo của người Sài Gòn qua các quán cà phê retro.',
        content: 'Sài Gòn - thành phố của những quán cà phê độc đáo, từ những quán vỉa hè bình dân đến những quán sang trọng trong các tòa nhà cao tầng. Đặc biệt, xu hướng cà phê retro đang làm mưa làm gió với không gian trang trí vintage, nhạc xưa và cách pha chế truyền thống. Cà phê sữa đá - thức uống đặc trưng của người Sài Gòn, được pha từ cà phê robusta đậm đà với sữa đặc. Bạn cũng có thể thử cà phê trứng - một biến tấu độc đáo, hay cà phê cốt dừa béo ngậy. Các quán cà phê apartment với view toàn thành phố cũng là điểm đến không thể bỏ qua.',
        image: 'images/saigon.jpg',
        category: 'culture',
        author: {
            name: 'Phạm Thị D',
            avatar: 'images/author4.jpg'
        },
        publishedAt: '2024-03-20',
        views: 2200,
        comments: 35
    },
    {
        id: 5,
        title: 'Hạ Long - Vịnh Di Sản Thế Giới',
        excerpt: 'Khám phá vẻ đẹp kỳ vĩ của Vịnh Hạ Long - một trong những kỳ quan thiên nhiên thế giới.',
        content: 'Vịnh Hạ Long - Di sản thiên nhiên thế giới với hơn 1.600 hòn đảo đá vôi lớn nhỏ tạo nên một bức tranh thiên nhiên tuyệt đẹp. Du khách có thể tham gia các tour thuyền để khám phá các hang động kỳ thú như hang Sửng Sốt, hang Đầu Gỗ, động Thiên Cung. Đặc biệt, trải nghiệm ngủ đêm trên vịnh trong những du thuyền sang trọng là một hoạt động không thể bỏ qua. Ngoài ra, du khách còn có thể tham gia các hoạt động như chèo kayak, lặn biển ngắm san hô, thăm làng chài và thưởng thức hải sản tươi ngon. Hoàng hôn trên vịnh Hạ Long là một trong những khoảnh khắc đẹp nhất, khi mặt trời dần khuất sau những hòn đảo đá.',
        image: 'images/halong.jpg',
        category: 'nature',
        author: {
            name: 'Hoàng Văn E',
            avatar: 'images/author5.jpg'
        },
        publishedAt: '2024-03-15',
        views: 2500,
        comments: 40
    },
    {
        id: 6,
        title: 'Lễ Hội Đèn Lồng Hội An',
        excerpt: 'Trải nghiệm không gian lung linh của Lễ hội đèn lồng Hội An - nét đẹp văn hóa đặc trưng của phố cổ.',
        content: 'Lễ hội đèn lồng Hội An diễn ra vào mỗi tối 14 âm lịch, biến phố cổ thành một không gian lung linh, huyền ảo với hàng nghìn chiếc đèn lồng đủ màu sắc. Du khách có thể tham gia các hoạt động như thả đèn hoa đăng trên sông Hoài, học làm đèn lồng truyền thống, và thưởng thức các tiết mục ca nhạc dân gian. Đặc biệt, các con phố như Nguyễn Thái Học, Trần Phú được trang trí với những dây đèn lồng nhiều màu sắc, tạo nên khung cảnh như trong cổ tích. Ngoài ra, du khách còn có thể thưởng thức ẩm thực đường phố đặc trưng và mua sắm các sản phẩm thủ công mỹ nghệ tại các gian hàng dọc phố cổ.',
        image: 'images/hoian-lantern.jpg',
        category: 'festival',
        author: {
            name: 'Nguyễn Thị F',
            avatar: 'images/author6.jpg'
        },
        publishedAt: '2024-03-10',
        views: 2800,
        comments: 45
    }
];

const comments = [
    {
        id: 1,
        postId: 1,
        userId: 2,
        content: 'Đà Lạt quả thực rất đẹp! Tôi đặc biệt thích những vườn hoa và khí hậu mát mẻ ở đây. Tháng trước tôi có dịp ghé thăm vườn hoa lavender, thật sự ấn tượng. Nhớ ghé Chợ Đêm Đà Lạt để thưởng thức bánh tráng nướng và sữa đậu nành nóng nữa nhé!',
        createdAt: '2024-04-02',
        isVisible: true,
    },
    {
        id: 2,
        postId: 2,
        userId: 3,
        content: 'Mì Quảng và Cao Lầu ở Hội An đúng là tuyệt phẩm! Tôi đã thử hết các quán được recommend trong bài và phải công nhận là ngon xuất sắc. Đặc biệt là quán mì Quảng bà Mua và Cao Lầu Không Gian Xanh, nhất định phải thử khi đến Hội An.',
        createdAt: '2024-03-29',
        isVisible: true,
    },
    {
        id: 3,
        postId: 3,
        userId: 4,
        content: 'Festival Huế năm nay thật hoành tráng! Tôi rất ấn tượng với bộ sưu tập "Huế - Kinh đô Áo dài". Những họa tiết cung đình được thêu tay tinh xảo thật sự làm nổi bật vẻ đẹp của áo dài truyền thống.',
        createdAt: '2024-03-26',
        isVisible: true,
    },
    {
        id: 4,
        postId: 4,
        userId: 1,
        content: 'Cà phê Sài Gòn đúng là có nét riêng! Tôi đặc biệt thích những quán cà phê apartment với view toàn thành phố. The Morning Café ở quận 1 là địa điểm yêu thích của tôi, vừa có view đẹp vừa có cà phê ngon.',
        createdAt: '2024-03-21',
        isVisible: true,
    },
    {
        id: 5,
        postId: 5,
        userId: 2,
        content: 'Vịnh Hạ Long quả thực là kỳ quan! Tôi vừa có chuyến du lịch 2 ngày 1 đêm trên du thuyền, được ngắm hoàng hôn và bình minh trên vịnh, thật tuyệt vời. Hang Sửng Sốt đẹp không thể tả, nhất định phải ghé thăm.',
        createdAt: '2024-03-16',
        isVisible: true,
    },
    {
        id: 6,
        postId: 6,
        userId: 3,
        content: 'Đêm rằm ở Hội An thật lung linh và lãng mạn! Tôi may mắn được tham gia workshop làm đèn lồng và thả đèn hoa đăng trên sông Hoài. Khung cảnh phố cổ về đêm thật sự như bước ra từ truyện cổ tích.',
        createdAt: '2024-03-11',
        isVisible: true,
    }
];

function displayPosts(postsToShow = posts) {
    const postsContainer = document.getElementById('posts-container');
    if (!postsContainer) return;

    postsContainer.innerHTML = '';

    postsToShow.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'col-lg-4 col-md-6';
        postElement.innerHTML = `
            <article class="post-card" data-category="${post.category}">
                <div class="post-card__image">
                    <img src="${post.image}" alt="${post.title}">
                    <span class="post-card__category">${getCategoryName(post.category)}</span>
                </div>
                <div class="post-card__content">
                    <div class="post-card__meta">
                        <span><i class="bi bi-calendar"></i>${formatDate(post.publishedAt)}</span>
                        <span><i class="bi bi-eye"></i>${post.views} lượt xem</span>
                        <span><i class="bi bi-chat"></i>${post.comments} bình luận</span>
                    </div>
                    <h3 class="post-card__title">
                        <a href="blog-detail.html?id=${post.id}">${post.title}</a>
                    </h3>
                    <p class="post-card__excerpt">${post.excerpt}</p>
                    <div class="post-card__footer">
                        <div class="post-card__author">
                            <div class="post-card__author-info">
                                <div class="post-card__author-name">${post.author.name}</div>
                            </div>
                        </div>
                        <a href="blog-detail.html?id=${post.id}" class="read-more">Đọc thêm <i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </article>
        `;
        postsContainer.appendChild(postElement);
    });
}

function checkLogin(username, password) {
    return users.find(user => user.username === username && user.password === password);
}

function registerUser(username, password) {
    if (users.some(user => user.username === username)) {
        return { success: false, message: 'Tên người dùng đã tồn tại' };
    }

    const newUser = {
        id: users.length + 1,
        username,
        password,
        role: 'user'
    };

    users.push(newUser);
    return { success: true, message: 'Đăng ký thành công' };
}

function addPost(title, content) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || currentUser.role !== 'admin') return false;

    const newPost = {
        id: posts.length + 1,
        title,
        content,
        authorId: currentUser.id,
        publishedAt: new Date().toISOString().split('T')[0],
        comments: []
    };

    posts.push(newPost);
    return true;
}

function editPost(id, title, content) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || currentUser.role !== 'admin') return false;

    const post = posts.find(p => p.id === id);
    if (!post) return false;

    post.title = title;
    post.content = content;
    return true;
}

function deletePost(id) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || currentUser.role !== 'admin') return false;

    const index = posts.findIndex(p => p.id === id);
    if (index === -1) return false;

    posts.splice(index, 1);
    return true;
}

function toggleCommentVisibility(id) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || currentUser.role !== 'admin') return false;

    const comment = comments.find(c => c.id === id);
    if (!comment) return false;

    comment.isVisible = !comment.isVisible;
    return true;
}

function deleteComment(id) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || currentUser.role !== 'admin') return false;

    const index = comments.findIndex(c => c.id === id);
    if (index === -1) return false;

    comments.splice(index, 1);
    return true;
}

function editUser(id, role) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || currentUser.role !== 'admin') return false;

    const user = users.find(u => u.id === id);
    if (!user) return false;

    user.role = role;
    return true;
}

function deleteUser(id) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || currentUser.role !== 'admin') return false;

    const index = users.findIndex(u => u.id === id);
    if (index === -1) return false;

    users.splice(index, 1);
    return true;
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

function formatDate(dateString) {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
}

function setupFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.post-card, .gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            items.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                } else if (item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

function setupSearch() {
    const searchInput = document.querySelector('.search-box input');
    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const posts = document.querySelectorAll('.post-card');

        posts.forEach(post => {
            const title = post.querySelector('.post-card__title').textContent.toLowerCase();
            const excerpt = post.querySelector('.post-card__excerpt').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
}

function setupSort() {
    const sortSelect = document.querySelector('.sort-select');
    if (!sortSelect) return;

    sortSelect.addEventListener('change', (e) => {
        const sortBy = e.target.value;
        const sortedPosts = [...posts].sort((a, b) => {
            if (sortBy === 'newest') {
                return new Date(b.publishedAt) - new Date(a.publishedAt);
            } else if (sortBy === 'popular') {
                return b.views - a.views;
            }
            return 0;
        });
        displayPosts(sortedPosts);
    });
}

function initBlog() {
    displayPosts();
    setupFilter();
    setupSearch();
    setupSort();
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }
}

function initBlogDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));

    const post = posts.find(p => p.id === postId);
    
    if (!post) {
        window.location.href = 'blog.html';
        return;
    }

    document.title = `${post.title} - Travel Blog`;
    document.getElementById('blog-title').textContent = post.title;
    document.getElementById('blog-author').textContent = post.author.name;
    document.getElementById('blog-date').textContent = formatDate(post.publishedAt);
    document.getElementById('blog-views').textContent = `${post.views} lượt xem`;
    document.getElementById('blog-comments').textContent = `${post.comments} bình luận`;
    document.getElementById('blog-image').src = post.image;
    document.getElementById('blog-image').alt = post.title;
    document.getElementById('blog-content').innerHTML = `<p>${post.content}</p>`;
    document.getElementById('author-avatar').src = post.author.avatar;
    document.getElementById('author-name').textContent = post.author.name;

    displayComments(postId);
    displayRelatedPosts(post.category, postId);
    displayPopularPosts(postId);
}

function displayComments(postId) {
    const postComments = comments.filter(c => c.postId === postId && c.isVisible);
    const commentsContainer = document.getElementById('comments-list');
    const commentsCount = document.getElementById('comments-count');

    if (commentsContainer && commentsCount) {
        commentsContainer.innerHTML = `
            <div class="text-center">
                <div class="loading-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p class="mt-2">Đang tải bình luận...</p>
            </div>
        `;

        setTimeout(() => {
            commentsCount.textContent = postComments.length;
            
            if (postComments.length === 0) {
                commentsContainer.innerHTML = `
                    <div class="text-center">
                        <i class="bi bi-chat-dots" style="font-size: 3rem; color: #ccc;"></i>
                        <p class="mt-3">Chưa có bình luận nào. Hãy là người đầu tiên bình luận!</p>
                    </div>
                `;
                return;
            }

            commentsContainer.innerHTML = postComments.map((comment, index) => `
                <div class="comment" style="animation-delay: ${index * 0.1}s">
                    <div class="comment__content">
                        <div class="comment__author">
                            ${users.find(u => u.id === comment.userId)?.username || 'Người dùng ẩn danh'}
                        </div>
                        <div class="comment__date">
                            <i class="bi bi-clock"></i> ${formatDate(comment.createdAt)}
                        </div>
                        <div class="comment__text">${comment.content}</div>
                    </div>
                </div>
            `).join('');

            const commentForm = document.getElementById('comment-form');
            if (commentForm) {
                commentForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const name = document.getElementById('comment-name').value;
                    const email = document.getElementById('comment-email').value;
                    const content = document.getElementById('comment-content').value;

                    if (name && email && content) {
                        const submitBtn = this.querySelector('button[type="submit"]');
                        const originalText = submitBtn.innerHTML;
                        submitBtn.innerHTML = `
                            <div class="loading-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        `;
                        submitBtn.disabled = true;

                        setTimeout(() => {
                            const newComment = {
                                id: comments.length + 1,
                                postId: postId,
                                userId: 1,
                                content: content,
                                createdAt: new Date().toISOString(),
                                isVisible: true
                            };
                            comments.push(newComment);
                            displayComments(postId);
                            commentForm.reset();
                            submitBtn.innerHTML = originalText;
                            submitBtn.disabled = false;

                            const alert = document.createElement('div');
                            alert.className = 'alert alert-success mt-3';
                            alert.innerHTML = 'Bình luận của bạn đã được gửi thành công!';
                            commentForm.appendChild(alert);
                            setTimeout(() => alert.remove(), 3000);
                        }, 1500);
                    }
                });
            }
        }, 1000);
    }
}

function displayRelatedPosts(category, currentPostId) {
    const relatedPosts = posts
        .filter(p => p.category === category && p.id !== currentPostId)
        .slice(0, 3);

    const relatedContainer = document.getElementById('related-posts');
    if (relatedContainer) {
        relatedContainer.innerHTML = relatedPosts.map(post => `
            <div class="post-related__item">
                <div class="post-related__image">
                    <a href="blog-detail.html?id=${post.id}">
                        <img src="${post.image}" alt="${post.title}">
                    </a>
                </div>
                <div class="post-related__content">
                    <h4><a href="blog-detail.html?id=${post.id}">${post.title}</a></h4>
                    <div class="post-related__meta">
                        <span><i class="bi bi-calendar"></i>${formatDate(post.publishedAt)}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function displayPopularPosts(currentPostId) {
    const popularPosts = posts
        .filter(p => p.id !== currentPostId)
        .sort((a, b) => b.views - a.views)
        .slice(0, 3);

    const popularContainer = document.getElementById('popular-posts');
    if (popularContainer) {
        popularContainer.innerHTML = popularPosts.map(post => `
            <div class="popular-post">
                <div class="popular-post__image">
                    <a href="blog-detail.html?id=${post.id}">
                        <img src="${post.image}" alt="${post.title}">
                    </a>
                </div>
                <div class="popular-post__content">
                    <h4><a href="blog-detail.html?id=${post.id}">${post.title}</a></h4>
                    <div class="popular-post__meta">
                        <span><i class="bi bi-calendar"></i>${formatDate(post.publishedAt)}</span>
                        <span><i class="bi bi-eye"></i>${post.views} lượt xem</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function setupGalleryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                } else if (item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

let lastScrollTop = 0;

function getCurrentPage() {
    return window.location.pathname.split('/').pop();
}

function initAboutPage() {
    // Khởi tạo counter animation
    const counters = document.querySelectorAll('.stat-counter');
    const speed = 200;

    const startCounting = (counter) => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const inc = target / speed;

        const updateCount = () => {
            if (count < target) {
                count += inc;
                counter.innerText = Math.ceil(count);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    };

    // Intersection Observer để bắt đầu đếm khi scroll đến
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));

    // Khởi tạo timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    timelineItems.forEach(item => timelineObserver.observe(item));
}

document.addEventListener('DOMContentLoaded', function() {
    // Kiểm tra đăng nhập ngay khi trang tải
    checkLoginStatus();

    const currentLocation = getCurrentPage();
    
    // Khởi tạo các tính năng dựa trên trang
    if (currentLocation === 'index.html' || currentLocation === '') {
        displayPosts(posts.slice(0, 6));
    } else if (currentLocation === 'blog.html') {
        initBlog();
    } else if (currentLocation === 'blog-detail.html') {
        initBlogDetail();
    } else if (currentLocation === 'gallery.html') {
        setupGalleryFilter();
    } else if (currentLocation === 'about.html') {
        initAboutPage();
    }

    // Khởi tạo các tính năng chung
    initCommonFeatures();
});

function initCommonFeatures() {
    // Khởi tạo loading overlay
    const loadingOverlay = document.querySelector('.loading-overlay');
    if (loadingOverlay) {
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 500);
    }

    // Khởi tạo AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Khởi tạo back to top button
    initBackToTop();

    // Khởi tạo smooth scroll
    initSmoothScroll();

    // Khởi tạo navbar scroll effect
    initNavbarScroll();
}

function checkLoginStatus() {
    console.log('Checking login status...');
    const user = JSON.parse(localStorage.getItem('currentUser'));
    console.log('Current user:', user);
    
    if (user) {
        console.log('User is logged in, updating UI...');
        updateUIForLoggedInUser(user);
        return true;
    } else {
        console.log('No user logged in, updating UI for logged out state...');
        updateUIForLoggedOutUser();
        return false;
    }
}

function updateUIForLoggedInUser(user) {
    console.log('Updating UI for logged in user:', user);
    
    // Xác định đường dẫn cơ sở
    const currentPath = getCurrentPage();
    const basePath = currentPath.includes('admin/') ? '../' : '';
    
    // Avatar mặc định và theme color
    const defaultAvatar = user.avatar || `${basePath}images/wrxdie.jpg`;
    const themeColor = user.username === 'jane_smith' ? 'red' : 'green';
    
    // Cập nhật navigation buttons
    const navButtons = document.querySelector('.nav-buttons');
    console.log('Nav buttons element:', navButtons);
    
    if (navButtons) {
        const userMenuHTML = `
            <div class="user-info d-flex align-items-center" data-theme="${themeColor}">
                <div class="dropdown">
                    <button class="btn btn-link dropdown-toggle d-flex align-items-center gap-2" 
                            type="button" 
                            id="userDropdown" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false">
                        <img src="${defaultAvatar}" alt="User Avatar" width="32" height="32" class="rounded-circle">
                        <span class="username">${user.username}</span>
                        <i class="bi bi-chevron-down"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                        <li class="user-profile">
                            <img src="${defaultAvatar}" alt="User Avatar">
                            <div class="user-info">
                                <span class="username">${user.username}</span>
                                <span class="user-role">${user.role === 'admin' ? 'Quản trị viên' : 'Thành viên'}</span>
                            </div>
                        </li>
                        <li><a class="dropdown-item" href="${basePath}profile.html">
                            <i class="bi bi-person-circle"></i>
                            Chỉnh sửa hồ sơ
                        </a></li>
                        <li><a class="dropdown-item" href="${basePath}inbox.html">
                            <i class="bi bi-envelope"></i>
                            Hộp thư đến
                        </a></li>
                        <li><a class="dropdown-item" href="${basePath}analytics.html">
                            <i class="bi bi-graph-up"></i>
                            Thống kê
                        </a></li>
                        <li><a class="dropdown-item" href="${basePath}settings.html">
                            <i class="bi bi-gear"></i>
                            Cài đặt
                        </a></li>
                        <li><a class="dropdown-item" href="${basePath}help.html">
                            <i class="bi bi-question-circle"></i>
                            Trợ giúp & Hỗ trợ
                        </a></li>
                        ${user.role === 'admin' ? `
                        <li><a class="dropdown-item" href="${basePath}admin/index.html">
                            <i class="bi bi-speedometer2"></i>
                            Quản trị
                        </a></li>
                        ` : ''}
                        <li><hr class="dropdown-divider"></li>
                        <li><button class="dropdown-item logout-btn">
                            <i class="bi bi-box-arrow-right"></i>
                            Đăng xuất
                        </button></li>
                    </ul>
                </div>
            </div>
        `;
        
        navButtons.innerHTML = userMenuHTML;
        
        // Thêm event listener cho nút đăng xuất
        const logoutBtn = navButtons.querySelector('.logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', handleLogout);
        }
    }

    // Cập nhật hiển thị các phần tử dựa trên vai trò
    document.querySelectorAll('.admin-only').forEach(item => {
        item.style.display = user.role === 'admin' ? 'block' : 'none';
    });

    document.querySelectorAll('.user-only').forEach(item => {
        item.style.display = 'block';
    });

    document.querySelectorAll('.login-btn, .register-btn').forEach(button => {
        button.style.display = 'none';
    });
}

function updateUIForLoggedOutUser() {
    console.log('Updating UI for logged out user');
    
    const navButtons = document.querySelector('.nav-buttons');
    if (navButtons) {
        const currentPath = getCurrentPage();
        const basePath = currentPath.includes('admin/') ? '../' : '';
        
        navButtons.innerHTML = `
            <a href="${basePath}login.html" class="btn btn-outline-primary me-2 login-btn">Đăng nhập</a>
            <a href="${basePath}register.html" class="btn btn-primary register-btn">Đăng ký</a>
        `;
    }

    // Ẩn các phần tử yêu cầu đăng nhập
    document.querySelectorAll('.admin-only, .user-only').forEach(item => {
        item.style.display = 'none';
    });
}

function handleLogout() {
    console.log('Handling logout...');
    localStorage.removeItem('currentUser');
    
    const currentPath = getCurrentPage();
    const basePath = currentPath.includes('admin/') ? '../' : '';
    
    // Cập nhật UI trước khi chuyển hướng
    updateUIForLoggedOutUser();
    
    // Chuyển hướng về trang chủ nếu cần
    if (currentPath.includes('admin/') || currentPath === 'profile.html') {
        window.location.href = `${basePath}index.html`;
    } else {
        window.location.reload();
    }
}

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

const heroSwiper = document.querySelector('.hero-swiper');
if (heroSwiper) {
    new Swiper('.hero-swiper', {
        loop: true,
        effect: 'fade',
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

window.addEventListener('load', () => {
    AOS.refresh();
});

function initContact() {
    // Form validation and animation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const button = this.querySelector('button[type="submit"]');
            button.innerHTML = '<i class="bi bi-check-circle me-2"></i>Đã Gửi Thành Công';
            button.classList.add('btn-success');
            setTimeout(() => {
                button.innerHTML = '<i class="bi bi-send me-2"></i>Gửi Tin Nhắn';
                button.classList.remove('btn-success');
            }, 3000);
        });
    }
}

// Auth Functions
function initAuth() {
    console.log('Initializing auth...');
    
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        console.log('Login form found');
        loginForm.addEventListener('submit', handleLogin);
        checkLoginStatus(); // Kiểm tra trạng thái đăng nhập khi tải trang
    } else {
        console.log('Login form not found');
    }

    if (registerForm) {
        console.log('Register form found');
        registerForm.addEventListener('submit', handleRegister);
    } else {
        console.log('Register form not found');
    }

    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
}

function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    console.log('Attempting login with:', { username, password });
    console.log('Available users:', users);
    
    // Tìm kiếm người dùng trong mảng users
    const user = users.find(u => u.username === username && u.password === password);
    
    console.log('Found user:', user);
    
    if (user) {
        // Lưu thông tin người dùng vào localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        // Hiển thị thông báo thành công
        const submitBtn = document.querySelector('#loginForm button[type="submit"]');
        submitBtn.innerHTML = '<i class="bi bi-check-circle me-2"></i>Đăng nhập thành công';
        submitBtn.classList.add('btn-success');
        
        // Chuyển hướng sau 1 giây
        setTimeout(() => {
            console.log('Redirecting user with role:', user.role);
            if (user.role === 'admin') {
                window.location.href = 'admin/index.html';
            } else {
                window.location.href = 'index.html';
            }
        }, 1000);
    } else {
        // Hiển thị thông báo lỗi
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
}

function handleRegister(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
    }
    
    const result = registerUser(username, password);
    
    if (result.success) {
        alert(result.message);
        window.location.href = 'login.html';
    } else {
        alert(result.message);
    }
}