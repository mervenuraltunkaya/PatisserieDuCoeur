export function initCanvas(canvasSelector, imagePath, iconCount = 26) {
  const canvas = document.getElementById(canvasSelector);
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const cakeIcon = new Image();
  cakeIcon.src = imagePath;

  const cakeIcons = [];

  class CakeIcon {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = 40 + Math.random() * 40;
      this.speedX = Math.random() * 2 - 0.5;
      this.speedY = Math.random() * 2 - 0.5;
      this.rotationSpeed = Math.random() * 0.05 - 0.025;
      this.angle = 0;
    }

    convertToGray(image) {
      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d");
      tempCanvas.width = image.width;
      tempCanvas.height = image.height;

      tempCtx.drawImage(image, 0, 0);
      const imageData = tempCtx.getImageData(
        0,
        0,
        tempCanvas.width,
        tempCanvas.height
      );
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = data[i + 1] = data[i + 2] = avg;
      }

      tempCtx.putImageData(imageData, 0, 0);
      return tempCanvas;
    }

    draw() {
      ctx.save();
      ctx.translate(this.x + this.size / 2, this.y + this.size / 2);
      ctx.rotate(this.angle);

      const grayCakeIcon = this.convertToGray(cakeIcon);
      ctx.drawImage(
        grayCakeIcon,
        -this.size / 2,
        -this.size / 2,
        this.size,
        this.size
      );

      ctx.restore();
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.angle += this.rotationSpeed;

      if (this.x + this.size > canvas.width || this.x < 0) this.speedX *= -1;
      if (this.y + this.size > canvas.height || this.y < 0) this.speedY *= -1;

      this.draw();
    }
  }

  cakeIcon.onload = () => {
    for (let i = 0; i < iconCount; i++) {
      cakeIcons.push(new CakeIcon());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cakeIcons.forEach((icon) => icon.update());
      requestAnimationFrame(animate);
    }

    animate();
  };
}
