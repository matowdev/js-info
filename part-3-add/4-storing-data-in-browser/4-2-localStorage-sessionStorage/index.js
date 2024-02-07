let area = document.getElementById('area');

area.value = localStorage.getItem('area');
area.oninput = () => {
  localStorage.setItem('area', area.value);
};
