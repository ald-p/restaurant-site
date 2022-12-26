const homeContent = () => {
  const homeBody = document.getElementById('content');

  homeBody.innerHTML = `
    <div class="container vh-100">
      <nav class="navbar navbar-expand-md">
        <div class="container">
          <a href="#" class="navbar-brand text-primary">Fast<span class="text-success">Break</span></a>
          <button class="navbar-toggler btn btn-primary bg-primary bg-opacity-50 collapsed me-4 p-1" type="button" data-bs-toggle="collapse" data-bs-target="#pages">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="pages">
            <ul class="navbar-nav ms-auto text-center">
              <li class="nav-item ms-3">
                <a href="#" class="nav-link text-primary link-success active">HOME</a>
              </li>
              <li class="nav-item ms-3">
                <a href="#" class="nav-link text-primary link-success">MENU</a>
              </li>
              <li class="nav-item ms-3">
                <a href="#" class="nav-link text-primary link-success">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section class="text-primary h-50 px-lg-5 mx-lg-5 mt-5 pt-5">
        <div class="container text-center h-100">
          <div class="d-flex flex-column align-items-center justify-content-center h-100">
            <h1 class="p-2 fw-bold">Food to break your fast.</h1>
            <p class="p-2 px-5 fw-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="d-lg-flex align-items-center justify-content-center">
              <button class="btn btn-outline-success text-primary home-page-btn mx-5 my-3">MENU</button>
              <button class="btn btn-outline-success text-primary home-page-btn mx-5 my-3">RESERVATIONS</button>
            </div>
          </div>
        </div>
      </section>
    </div>

    <footer>
      <div class="p-2 d-sm-flex align-items-center justify-content-between text-primary fw-lighter bg-secondary text-center">
        <div>Developed by Aldwin</div>
        <div>FastBreak © 2022 | All Rights Reserved</div> 
      </div>
    </footer>`;
}

export default homeContent;