const footer = () => {
  const footerEl = document.getElementById('footer');

  footerEl.innerHTML = `
  <footer>
    <div class="p-2 d-sm-flex align-items-center justify-content-between text-primary fw-lighter bg-secondary text-center">
      <div>Developed by Aldwin</div>
      <div>FastBreak © 2022 | All Rights Reserved</div> 
    </div>
  </footer>`
}

export default footer;