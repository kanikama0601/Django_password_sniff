const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;
const slideCount = dots.length;

// スライドを移動する関数
function moveToSlide(index) {
    currentSlide = index;
    slider.style.transform = `translateX(-${index * 25}%)`; // 25%ずつ移動
    
    // アクティブなドットを更新
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// 自動スライド
function autoSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    moveToSlide(currentSlide);
}

// ドットクリックでスライド切り替え
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => moveToSlide(index));
});

// 5秒ごとに自動スライド
setInterval(autoSlide, 5000);