// Loading
$(window).on('load', function () { // 網頁讀取完畢後
    setTimeout(function () {
        $('.loading').fadeOut(1000); // 讀取畫面等1000ms之後淡出
    }, 1000);
    $('.start-1').show(); // 開始畫面1出現
})


$(function () {
    let gameRunning = false, // 啟動遊戲變數
        monMove = true, // 怪物移動變數
        windowHalfHeight = ($(window).height() / 2) + 'px', // 整個畫面高度的一半
        windowHalfWidth = ($(window).width() / 2) + 'px', // 整個畫面寬度的一半
        windowHalfHeight1 = ($(window).height() / 2 + 10) + 'px', // 整個畫面高度的一半
        windowHalfWidth1 = ($(window).width() / 2 + 10) + 'px', // 整個畫面寬度的一半
        windowHalfHeight2 = ($(window).height() / 2 - 10) + 'px', // 整個畫面高度的一半
        windowHalfWidth2 = ($(window).width() / 2 - 10) + 'px', // 整個畫面寬度的一半
        mon1, // 怪物編號變數
        mon2,
        mon3,
        mon4,
        src,
        final,
        score = 0; // 分數

    // 一開始隱藏幾個畫面
    $('.start-2, .game, .final').hide();

    // Start
    $('.start-1 .start-btn').on('click', function () { // 點擊開始畫面1按鈕）
        $('.start-1').hide(); // 開始畫面1消失
        $('.start-2').show(); // 開始畫面2出現
    })
    $('.start-2 .start-btn').on('click', function () { // 點擊開始畫面2（之後要改成點選按鈕）
        $('.start-2').hide(); // 開始畫面2消失
        $('.game').show(); // 遊戲畫面出現
        gameRunning = true; // 啟動遊戲變數
        game(); // 呼叫遊戲函式
    })

    // 遊戲函式
    function game() {
        if (!gameRunning) {
            return; // 如果變數為假就停止遊戲
        }
        let topLeft,
            topRight,
            leftTop,
            leftBottom;
        monTop();
        monBottom();
        monLeft();
        monRight();

        function monTop() { // 從上方出來的函式
            if (!monMove) { // 如果怪物移動變數為假就停止跑出怪物
                return;
            }
            leftTop = Math.floor(Math.random() * 100); // 隨機的 0-100 數字
            mon1 = Math.floor(Math.random() * 6) + 1; // 隨機從1-6選一個怪物
            $('.mon-1 img').attr('src', 'images/mon-' + mon1 + '.png'); // 把怪物圖片寫進img裡
            $('.mon-1').show();
            // Monster
            $('.mon-1').css({
                'left': leftTop + '%',
                'top': '-100px',
            })
            $('.mon-1').animate({
                'left': '50%',
                'top': '50%',
            }, 3000, 'linear') // 移動速度3000ms

            setTimeout(monTop, 3000) // 每3000ms跑一個出來
        }

        function monBottom() { // 從上方出來的函式
            if (!monMove) { // 如果怪物移動變數為假就停止跑出怪物
                return;
            }
            leftBottom = Math.floor(Math.random() * 100); // 隨機的 0-100 數字
            mon3 = Math.floor(Math.random() * 6) + 1;
            $('.mon-3 img').attr('src', 'images/mon-' + mon3 + '.png');
            $('.mon-3').show();
            // Monster
            $('.mon-3').css({
                'left': leftBottom + '%',
                'top': '100%',
            })
            $('.mon-3').animate({
                'left': '50%',
                'top': '50%',
            }, 3000, 'linear') // 移動速度3000ms

            setTimeout(monBottom, 3000) // 每3000ms跑一個出來
        }

        function monLeft() { // 從左方出來的函式
            if (!monMove) { // 如果怪物移動變數為假就停止跑出怪物
                return;
            }
            topLeft = Math.floor(Math.random() * 100); // 隨機的 0-100 數字
            mon2 = Math.floor(Math.random() * 6) + 1;
            $('.mon-2 img').attr('src', 'images/mon-' + mon2 + '.png');
            $('.mon-2').show();
            // Monster
            $('.mon-2').css({
                'left': '-100px',
                'top': topLeft + '%',
            })
            $('.mon-2').animate({
                'left': '50%',
                'top': '50%',
            }, 2000, 'linear') // 移動速度2000ms

            setTimeout(monLeft, 2000) // 每2000ms跑一個出來
        }

        function monRight() { // 從左方出來的函式
            if (!monMove) { // 如果怪物移動變數為假就停止跑出怪物
                return;
            }
            topRight = Math.floor(Math.random() * 100); // 隨機的 0-100 數字
            mon4 = Math.floor(Math.random() * 6) + 1;
            $('.mon-4 img').attr('src', 'images/mon-' + mon4 + '.png');
            $('.mon-4').show();
            // Monster
            $('.mon-4').css({
                'left': '100%',
                'top': topRight + '%',
            })
            $('.mon-4').animate({
                'left': '50%',
                'top': '50%',
            }, 2000, 'linear') // 移動速度2000ms

            setTimeout(monRight, 2000) // 每2000ms跑一個出來
        }

    }

    setInterval(function () {
        let monY = $('.mon-y').css('top'); // 縱著跑的怪物
        if (monY > 49.5 && monY < 50.5) { //當怪物跑到中間的時候
            monMove = false; // 怪物移動變數為假
            // gameRunning = false;
            // src = $('.mon-y img').attr('src');
            // if (src == 'images/mon-1.png') {
            //     final = 1;
            // } else if (src == 'images/mon-2.png') {
            //     final = 2;
            // } else if (src == 'images/mon-3.png') {
            //     final = 3;
            // } else if (src == 'images/mon-4.png') {
            //     final = 4;
            // } else if (src == 'images/mon-5.png') {
            //     final = 5;
            // } else if (src == 'images/mon-6.png') {
            //     final = 6;
            // }
            // $('.game').hide();
            // $('.lose').show();
            // $('.lose .final-img img').attr('src', 'images/lose-' + final + '.png');
        }
    }, 10) // 每10ms掃描一次怪物位置

    setInterval(function () {
        let monX = $('.mon-x').css('left'); // 橫著跑的怪物
        if (monX > 49.5 && monX < 50.5) { //當怪物跑到中間的時候
            monMove = false; // 怪物移動變數為假
            // gameRunning = false;
            // src = $('.mon-x img').attr('src');
            // if (src == 'images/mon-1.png') {
            //     final = 1;
            // } else if (src == 'images/mon-2.png') {
            //     final = 2;
            // } else if (src == 'images/mon-3.png') {
            //     final = 3;
            // } else if (src == 'images/mon-4.png') {
            //     final = 4;
            // } else if (src == 'images/mon-5.png') {
            //     final = 5;
            // } else if (src == 'images/mon-6.png') {
            //     final = 6;
            // }
            // $('.game').hide();
            // $('.lose').show();
            // $('.lose .final-img img').attr('src', 'images/lose-' + final + '.png');
        }
        console.log(monMove)
    }, 10) // 每10ms掃描一次怪物位置

    // Mon
    $('.mon').on('click', function () {
        $(this).hide().stop(); // 當怪物被點到，該怪物會被隱藏然後停止動畫。
        score = score + 5; // 加5分
        if (score >= 20) {
            monMove = false;
            gameRunning = false;
            $('.game').hide();
            $('.win').show();
        }
        $('.header--score').text(score); // 把分數寫進
    })



    $('.restart-btn').on('click', function () {
        $('.final').hide();
        $('.game').show();
        score = 0;
        $('.header--score').text(score); // 把分數寫進
        monMove = true;
        gameRunning = true;
        game();
    })
})