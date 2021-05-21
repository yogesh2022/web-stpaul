'use strict';
var __mobileMenu = {};

__mobileMenu.showDrawer = function __showDrawer() {
    var $drawerCont = $(".js-side-drawer");
    var $drawerOverlay = $(".js-side-drawer-bg");
    $drawerCont.addClass("side-drawer-active");
    $drawerOverlay.addClass("side-drawer-active-bg");
    __mobileMenu.freezeBody();
};

__mobileMenu.hideDrawer = function __hideDrawer() {
    var $drawerCont = $(".js-side-drawer");
    var $drawerOverlay = $(".js-side-drawer-bg");
    var $menuButton = $('.js-menu-drawer');
    $drawerCont.removeClass("side-drawer-active");
    $drawerOverlay.removeClass("side-drawer-active-bg");
    $menuButton.removeClass("menu-active");
    __mobileMenu.unFreezeBody();
};

var initMobileMenu = function __initMobileMenu() {
    $('.js-menu-drawer').on('click', function () {
        var $this = $(this);
        $this.addClass('menu-active');
        __mobileMenu.showDrawer();
    });

    $(".js-drawer-close").on('click', function () {
        __mobileMenu.hideDrawer();
    });
};

__mobileMenu.freezeBody = function __freezeBody() {
    var $body = $('body');
    $body.addClass('position-fixed overflow-hidden');
};

__mobileMenu.unFreezeBody = function __freezeBody() {
    var $body = $('body');
    $body.removeClass('position-fixed overflow-hidden');
};

$(document).ready(function () {
    initMobileMenu();
});