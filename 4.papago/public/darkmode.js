// dart mode 토글 버튼
const checkbox = document.getElementById('checkbox');

// dart mode를 적용하기 위해 <html>에 class="dart"를 적용해야 함
const html = document.querySelector('html');

const toggleDarkmode = () => checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark');
checkbox.addEventListener('click', toggleDarkmode);
