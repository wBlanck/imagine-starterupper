window.onscroll = () => {
  if(window.pageYOffset > 50) {
    document.getElementById('top-header').classList.add('header--shrink');
  } else {
    document.getElementById('top-header').classList.remove('header--shrink');
  }
}