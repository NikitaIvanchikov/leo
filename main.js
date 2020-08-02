let tab = function() {
  let tabNav = document.querySelectorAll('.tabs-nav__item'),
      tabContent = document.querySelectorAll('.tab'),
      tabName;

  tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav)
  });
  function selectTabNav() {
    tabNav.forEach(item=>{
      item.classList.remove('active');
    });
    this.classList.add('active');
    tabName = this.getAttribute('data-tab-name');
    console.log(tabName)
    selectTabContent (tabName);
  }

  function selectTabContent (tabName) {
    console.log(tabContent)
    tabContent.forEach(item => {
      console.log(item)
      if (item.classList.contains(tabName) === true) {
        item.classList.add('active');
      }else {
        item.classList.remove('active');
      }
    })
  }
}



tab()

$(function() {
  $('.jcarousel').jcarousel({
    animation: 'slow',
    rtl: true,
    transitions: true,
    center: true,
    wrap: 'both'
      // Configuration goes here
  });
});