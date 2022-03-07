let blogs = []

function addBlog() {
    let name = document.getElementById('input-project-name').value;
    let dates = document.getElementById('input-date').value;
    let description = document.getElementById('input-description').value;
    let technologies = document.getElementById('technologies').value;
    let images = document.getElementById('input-blog-image').files[0];

    images = URL.createObjectURL(images);

    let blog = {
        name: name,
        dates: dates,
        description: description,
        technologies: technologies,
        images: images,
        postedAt: new Date()
    }

    blogs.push(blog)

    renderBlog()
}

function renderBlog() {

    let blogContainer = document.getElementById('contents')

    blogContainer.innerHTML = `
    <div class="blog-list-item">
                    <div class="blog-image">
                        <img src="assets/code.jpg" alt="">
                    </div>

                    <h3>
                        <a href="blog-detail.html" target="_blank" style="text-decoration: none;">
                            Dumbways Mobile App - 2022
                    </h3>
                    <h5>
                        durasi: 3 bulan
                    </h5>

                    <div class="detail-blog-content">
                        <p>
                            App that used for dumbways student, if was deployed and can downloaded on playstore.
                            Happy Download.
                        </p>
                    </div>

                    <div class="icon">
                        <i class="fa-brands fa-google-play"></i>
                        <i class="fa-brands fa-android"></i>
                        <i class="fa-brands fa-java"></i>
                    </div>

                    <div class="blog-content">


                        <div class="button-group">
                            <a href="#" class="button-edit">edit</a>
                            <a href="#" class="button-delete">delete</a>
                        </div>
                    </div>
                </div>

                
              <div class="blog-list-item">
                    <div class="blog-image">
                        <img src="assets/mobile.jpg" alt="">
                    </div>

                    <h3>
                        <a href="blog-detail.html" target="_blank" style="text-decoration: none;">
                            Dumbways Mobile App - 2022
                    </h3>
                    <h5>
                        durasi: 3 bulan
                    </h5>

                    <div class="detail-blog-content">
                        <p>
                            App that used for dumbways student, if was deployed and can downloaded on playstore.
                            Happy
                            Download.
                        </p>
                    </div>

                    <div class="icon">
                        <i class="fa-brands fa-google-play"></i>
                        <i class="fa-brands fa-android"></i>
                        <i class="fa-brands fa-java"></i>
                    </div>

                    <div class="blog-content">
                        <div class="button-group">
                            <a href="#" class="button-edit">edit</a>
                            <a href="#" class="button-delete">delete</a>
                        </div>
                    </div>
                </div>

                
                <div class="blog-list-item">
                    <div class="blog-image">
                        <img src="assets/html.jpg" alt="">
                    </div>

                    <h3>
                        <a href="blog-detail.html" target="_blank" style="text-decoration: none;">
                            Dumbways Mobile App - 2022
                    </h3>
                    <h5>
                        durasi: 3 bulan
                    </h5>

                    <div class="detail-blog-content">
                        <p>
                            App that used for dumbways student, if was deployed and can downloaded on playstore.
                            Happy
                            Download.
                        </p>
                    </div>

                    <div class="icon">
                        <i class="fa-brands fa-google-play"></i>
                        <i class="fa-brands fa-android"></i>
                        <i class="fa-brands fa-java"></i>
                    </div>

                    <div class="blog-content">
                        <div class="button-group">
                            <a href="#" class="button-edit">edit</a>
                            <a href="#" class="button-delete">delete</a>
                        </div>
                    </div>
                </div>
                

                <div class="blog-list-item">
                    <div class="blog-image">
                        <img src="assets/coding.jpg" alt="">
                    </div>

                    <h3>
                        <a href="blog-detail.html" target="_blank" style="text-decoration: none;">
                            Dumbways Mobile App - 2022
                    </h3>
                    <h5>
                        durasi: 3 bulan
                    </h5>

                    <div class="detail-blog-content">
                        <p>
                            App that used for dumbways student, if was deployed and can downloaded on playstore.
                            Happy Download.
                        </p>
                    </div>

                    <div class="icon">
                        <i class="fa-brands fa-google-play"></i>
                        <i class="fa-brands fa-android"></i>
                        <i class="fa-brands fa-java"></i>
                    </div>

                    <div class="blog-content">
                        <div class="button-group">
                            <a href="#" class="button-edit">edit</a>
                            <a href="#" class="button-delete">delete</a>
                        </div>
                    </div>
                </div>`

    for (let i = 0; i < blogs.length; i++) {
        blogContainer.innerHTML += `
    <div class="blog-list-item">
                    <div class="blog-image">
                        <img src="${blogs[i].images}" alt="">
                    </div>

                    <h3>
                        <a href="blog-detail.html" target="_blank" style="text-decoration: none;">${blogs[i].name}
                    </h3>
                    <h5>
                        durasi: 3 bulan
                    </h5>

                    <div class="detail-blog-content">
                        <p>
                            ${blogs[i].description}
                        </p>
                    </div>

                    <div class="icon">
                        <i class="fa-brands fa-google-play"></i>
                        <i class="fa-brands fa-android"></i>
                        <i class="fa-brands fa-java"></i>
                    </div>

                    <div class="blog-content">


                        <div class="button-group">
                            <a href="#" class="button-edit">edit</a>
                            <a href="#" class="button-delete">delete</a>
                        </div>
                    </div>
                </div>`
    }
}