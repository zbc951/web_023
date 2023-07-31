// swiper jq
$(function () {
    var swiper = new Swiper('.swiper-banner', {
        loop: true, //循環
        autoHeight: true, //自動高
        autoplay: {  //自動播放
            delay: 7000, //延遲
            disableOnInteraction: false, //互動後停止
            pauseOnMouseEnter: true, //滑鼠滑入時停止
        },
        slidesPerView: 1, //顯示個數
        spaceBetween: 0, //間距
        breakpoints: { //RWD
            2000: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            1260: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            1000: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        },
        pagination: { //dot
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: { //arrow
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})
// to top
const toTop = Vue.createApp({
    data() {
        return {
            showToTop: false,
        };
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
    },
    mounted() {
        window.addEventListener('scroll', () => {
            this.showToTop = window.scrollY > 0;
        });
    },
}); toTop.mount('aside');

// header menu select
const menuSelect = Vue.createApp({
    data() {
        return {
            lis: [
                { text: '首頁', active: true },
                { text: '體育賽事', active: false },
                { text: '真人娛樂', active: false },
                { text: '老虎機', active: false },
                { text: '彩票', active: false },
                { text: '捕魚機', active: false },
                { text: '棋牌遊戲', active: false },
                { text: '優惠', active: false },
                { text: 'VIP會員', active: false },
            ],
            bottomAreaDisplay: false,
            bottomAreaULIndex: null, // 記錄相對應的 ul 的 index
            ulClasses: ['sport', 'live', 'slot', 'lottery', 'fish', 'board'], // 每個 ul 的 class 名稱
            bottomAreaItems: [
                // sport 
                [
                    {
                        imgSrc: './img/36588.png',
                        text: '36588體育',
                    },
                    {
                        imgSrc: './img/pinn.png',
                        text: '平博體育',
                    },
                ],
                // live
                [
                    {
                        imgSrc: './img/sa.png',
                        text: '沙龍真人娛樂',
                    },
                    {
                        imgSrc: './img/ab.png',
                        text: '歐博真人娛樂',
                    },
                    {
                        imgSrc: './img/dg.png',
                        text: 'DG真人娛樂',
                    },
                    {
                        imgSrc: './img/wm.png',
                        text: 'WM真人娛樂',
                    },
                    {
                        imgSrc: './img/og.png',
                        text: 'OG真人娛樂',
                    },
                    {
                        imgSrc: './img/rg.png',
                        text: 'RG真人娛樂',
                    },
                    {
                        imgSrc: './img/kg.png',
                        text: 'KG真人娛樂',
                    },
                    {
                        imgSrc: './img/wg.png',
                        text: 'WG真人娛樂',
                    },
                ],
                //slot
                [
                    {
                        imgSrc: './img/bng.png',
                        text: 'BNG電子娛樂',
                    },
                    {
                        imgSrc: './img/bwin.png',
                        text: '必贏電子娛樂',
                    },
                    {
                        imgSrc: './img/fa.png',
                        text: '福星電子娛樂',
                    },
                    {
                        imgSrc: './img/gr.png',
                        text: '好路棋牌',
                    },
                    {
                        imgSrc: './img/ifun.png',
                        text: 'FUN GAME',
                    },
                    {
                        imgSrc: './img/naga.png',
                        text: 'NAGA GAME',
                    },
                    {
                        imgSrc: './img/pls.png',
                        text: 'PLS電子娛樂',
                    },
                    {
                        imgSrc: './img/png.png',
                        text: 'PNG電子娛樂',
                    },
                    {
                        imgSrc: './img/rsg.png',
                        text: 'RSG電子娛樂',
                    },
                    {
                        imgSrc: './img/sp.png',
                        text: 'SimplePlay',
                    },
                    {
                        imgSrc: './img/tpg.png',
                        text: 'TPG電子娛樂',
                    },
                    {
                        imgSrc: './img/ufo.png',
                        text: 'UFO電子娛樂',
                    },
                ],
                // lottery
                [
                    {
                        imgSrc: './img/sg.png',
                        text: 'SG88六合、大樂、539',
                    },
                    {
                        imgSrc: './img/gs.png',
                        text: '京彩彩票',
                    },
                    {
                        imgSrc: './img/rwd.png',
                        text: '白鹿電子娛樂',
                    },
                    {
                        imgSrc: './img/wg.png',
                        text: 'WG',
                    },
                ],
                // fish
                [
                    {
                        imgSrc: './img/bwin.png',
                        text: '必贏電子娛樂',
                    },
                    {
                        imgSrc: './img/fa.png',
                        text: '福星電子娛樂',
                    },
                    {
                        imgSrc: './img/gr.png',
                        text: '好路棋牌',
                    },
                    {
                        imgSrc: './img/rsg.png',
                        text: 'RSG電子娛樂',
                    },
                    {
                        imgSrc: './img/sp.png',
                        text: 'SimplePlay',
                    },
                    {
                        imgSrc: './img/tpg.png',
                        text: 'TPG電子娛樂',
                    },
                    {
                        imgSrc: './img/ufo.png',
                        text: 'UFO電子娛樂',
                    },
                ],
                // board
                [
                    {
                        imgSrc: './img/bts.png',
                        text: 'BTS電子娛樂',
                    },
                    {
                        imgSrc: './img/fa.png',
                        text: '福星電子娛樂',
                    },
                    {
                        imgSrc: './img/gr.png',
                        text: '好路棋牌',
                    },
                    {
                        imgSrc: './img/ifun.png',
                        text: 'FUN GAME',
                    },
                    {
                        imgSrc: './img/png.png',
                        text: 'PNG電子娛樂',
                    },
                    {
                        imgSrc: './img/bwin.png',
                        text: 'BWIN電子娛樂',
                    },
                    {
                        imgSrc: './img/ufo.png',
                        text: 'UFO電子娛樂',
                    },
                ],
            ],
            click: 0,
            minClick: 0,
        };
    },
    methods: {
        showBottomArea(index) {
            this.lis.forEach((item, i) => {
                item.active = i === index;
            });

            if (index !== 0 && index !== 7 && index !== 8) {
                this.bottomAreaULIndex = index - 1;
                this.bottomAreaDisplay = true;

                const ulClass = this.ulClasses[this.bottomAreaULIndex];
                const liLength = this.bottomAreaItems[this.bottomAreaULIndex].length;


                if (liLength > 6) {
                    const arrowNext = document.querySelector(".arrow_ic.next");
                    arrowNext.classList.add("active");
                } else {
                    const arrowNext = document.querySelector(".arrow_ic.next");
                    arrowNext.classList.remove("active");
                }

                // 將 liLength 設置為底部顯示內容的項目數量的最大值
                this.liLength = this.bottomAreaItems[this.bottomAreaULIndex].length;
                // 重置其他选项卡的滚动位置为 0
                this.resetTranslateXForOtherTabs(ulClass);
                this.click = 0;
                const arrowPrev = document.querySelector(".arrow_ic.prev");
                arrowPrev.classList.remove("active");

            } else {
                this.bottomAreaULIndex = null;
                this.bottomAreaDisplay = false;
            }
        },
        resetTranslateXForOtherTabs(excludeClass) {
            const ulElements = document.querySelectorAll('.listArea ul');

            ulElements.forEach(ulElement => {
                if (ulElement.classList.contains(excludeClass)) {
                    return; // 跳过当前选项卡，不重置其滚动位置
                }

                const olElement = ulElement.querySelector("ol");
                olElement.style.transform = 'translateX(0)';
                this.click = 0; // 重置点击次数为 0
            });
        },
        hideAll() {
            this.bottomAreaDisplay = false;
        },
        showUlArea() {
            this.bottomAreaDisplay = true;
        },
        hideBottomArea() {
            this.bottomAreaDisplay = false;
            this.bottomAreaULIndex = null;
        },
        clickNext() {
            if (this.bottomAreaULIndex !== null) {
                const ulClass = this.ulClasses[this.bottomAreaULIndex];
                const ulElement = document.querySelector(`.${ulClass}`);
                const olElement = ulElement.querySelector("ol");

                // 尚未達到 (max值 - 6) 次點擊
                if (this.click < (this.liLength - 6)) {
                    this.click++;
                    // 計算位移距離並將 olElement 的 transform 設定為相應值
                    const offset = -220 * this.click;
                    olElement.style.transform = `translateX(${offset}px)`;

                    // 檢查是否達到 this.liLength - 6，若是則移除 "active" class
                    if (this.click === (this.liLength - 6)) {
                        const arrowNext = document.querySelector(".arrow_ic.next");
                        arrowNext.classList.remove("active");
                    }
                    // 当 click 大于等于 1 时，给 "上一页" 按钮添加 "active" class
                    if (this.click != 0) {
                        const arrowPrev = document.querySelector(".arrow_ic.prev");
                        arrowPrev.classList.add("active");
                    } else {
                        arrowPrev.classList.remove("active");
                    }
                }
            }
        },
        clicPrev() {
            if (this.bottomAreaULIndex !== null) {
                // 檢查是否已達到 this.minClick，若是則不進行滾動操作
                if (this.click > this.minClick) {
                    const ulClass = this.ulClasses[this.bottomAreaULIndex];
                    const ulElement = document.querySelector(`.${ulClass}`);
                    const olElement = ulElement.querySelector("ol");

                    // 執行向前滾動操作
                    this.click--;
                    const offset = -220 * this.click;
                    olElement.style.transform = `translateX(${offset}px)`;

                    // 處理 arrowNext 的顯示
                    const arrowNext = document.querySelector(".arrow_ic.next");
                    arrowNext.classList.add("active");
                }

                // 處理 arrowPrev 的顯示
                const arrowPrev = document.querySelector(".arrow_ic.prev");
                if (this.click <= this.minClick) {
                    arrowPrev.classList.remove("active");
                } else {
                    arrowPrev.classList.add("active");
                }
            }
        },
    },
}); menuSelect.mount('header');

// footer menu select
const footerActive = Vue.createApp({
    data() {
        return {
            lis: [
                { text: "最新公告", active: true },
                { text: "優惠", active: false },
                { text: "VIP會員", active: false },
                { text: "幫助中心", active: false },
                { text: "關於我們", active: false },
                { text: "加入我們", active: false },
            ],
        };
    },
    methods: {
        toggleActive(index) {
            this.lis.forEach((item, i) => {
                item.active = i === index;
            });
        },
    },
}); footerActive.mount(".upperHalf")