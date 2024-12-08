let startScreen = function () {
    // Выводим текст "Hello" на экране
    basic.showString("Hello!");
    basic.pause(1000);  // Пауза в 1 секунду

    // Показываем изображение в виде смайлика
    basic.showIcon(IconNames.Happy);
    basic.pause(1000);

    // Переход к основным действиям
    basic.showString("START!");
}
let playMusic = function () {
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.ForeverInBackground);
}
let soundAnimation = function () {
    // Каждую секунду издает звук и показывает анимацию
    basic.forever(function () {
        music.playTone(262, music.beat(BeatFraction.Whole));  // Тон 262 Гц, целая нота
        basic.showIcon(IconNames.Square); // Показываем анимацию
        basic.pause(500);
        basic.showIcon(IconNames.Happy); // Показываем анимацию
        basic.pause(500);
    });
}
startScreen();
playMusic();
soundAnimation();
