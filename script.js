document.addEventListener('mousemove', function (e) {
    const emoji = document.createElement('div');
    emoji.innerHTML = '💩';
    emoji.style.position = 'fixed';
    emoji.style.left = e.clientX + 'px';
    emoji.style.top = e.clientY + 'px';
    emoji.style.fontSize = '20px';
    emoji.style.pointerEvents = 'none';
    emoji.style.userSelect = 'none';
    emoji.style.zIndex = '1000';
    emoji.style.transition = 'all 1s ease';

    // Random slight movement
    const randomX = (Math.random() - 0.5) * 20;
    const randomY = (Math.random() - 0.5) * 20;

    document.body.appendChild(emoji);

    // Animate
    requestAnimationFrame(() => {
        emoji.style.transform = `translate(${randomX}px, ${randomY + 20}px)`;
        emoji.style.opacity = '0';
    });

    // Cleanup
    setTimeout(() => {
        emoji.remove();
    }, 1000);
});
