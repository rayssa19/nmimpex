try {
    window.$ = window.jQuery = require('jquery');
    require('jquery-validation');
    require('@fancyapps/fancybox');
    require('jquery-ui-dist/jquery-ui.min');
    require('slick-carousel');
    require('bootstrap');
    require('popper.js');
    window.simpleParallax = require('simple-parallax-js');

    window.axios = require('axios');
    axios.defaults.baseURL = 'https://faq-allianz.valide.vc/api/v1';
    axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNTU4NGU5YzExM2I5ZTAwOTA4MDdlM2QxZjg5OWQ3MWRiMDk4OGZlMGM3YTA5ZjE4YThlNTVhYzZkMDBlMzJmNGQ5NDEyM2MxZWYzZGQzYTkiLCJpYXQiOjE1OTIwNTkzMDUsIm5iZiI6MTU5MjA1OTMwNSwiZXhwIjoxNjIzNTk1MzA1LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.dTaGJ6ZFi7ypjnEWzsvdEU0KnWs9EJORKHyBuozpzWajk8HW9Z0TJQoEWlQd734CSfDS8lwc0JGG-RccH9sLRflCnvfmg0sR_lswGv7snwlrkMDtzUEV7e8OuqUYpeuQUQk5C0dKCy7zFM-rk5qVuJpvZzOhWwj3bSZSe8TaR7gVzhe1wF1VAKo1VV7RfK-kdH_HqU-KmdhkTMD6fvVSUFSHkWxwVnPYY1EzaTfW595_d0DUsx7kgBuW4d6DUHM8v_OcBaCmdp_UTIFORn2vXnSBSMi_huAb3A0j3mLKLuEDoy0GAqLpZd4tvGPstQIYlcmOWeKR04EuyB3osaDQTZUzFiEqbwIO_UTKFq8tj0t7M_jd3C1UqLL8pRG53BuULxmbbG3daAKlqo2ao7BWDDmSp-ZG7BWBXknU6-XxmKjcb_5vdC6_dUxe2FMt3QN744jhNOnJweDf9w9sKS0NIOS-uCZKJOpYbK5aWSQeVokoDxDRo4rrL-mhwSCqwlnDF960B4tDwkEYtkSdjDHb6vMjpkqemKzrobARDVQxtZzofkNONRyivb85c00-2xmlfzlM90D8WKBWPX7Y7ZLExcrsJSqHNaYECxWIBWTluk_82pMZpmN4LhQZ1U7ivKIr5rgXW6AzlOVEaAo6adfQxSi96wzJd3EqK4OxotVtLrU';

} catch (e) {}