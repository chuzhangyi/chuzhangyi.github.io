$(".seach-font").on("touchstart",function(){$(".seach-screen").fadeIn(100).children(".screen-chlid").animate({left:"20%"},200).find(".tete").animate({left:"20%"},200),$("body").addClass("body")}),$(".screen-te").on("touchstart",function(){$(this).parents(".seach-screen").fadeOut().find(".screen-chlid").css("left","100%").children(".screen-te").css("left","100%"),$("body").removeClass("body")}),function(){function t(t,e){t.is("."+e)?t.removeClass(e):t.addClass(e)}function e(t,e,s){var s=s||"type-font-active",i=t.index();$(e).removeClass(s).eq(i).addClass(s)}function s(t,e,s,i){var n=i||"type-icon-active",a=e||".icon-f11",o=s||".icon-xiajiantou",c=t.children(a),l=t.children(o);c.is("."+n)?(c.removeClass(n),l.addClass(n)):(c.addClass(n),l.removeClass(n))}$(".duc-loading");$(".type-nav-box").on("touchstart",".type-nav-list",function(){e($(this),".type-nav-list"),this!=$("#type-nav-list1")[0]&&($(".type-list-child").fadeOut(100),$("body").removeClass("body"),$("#type-nav-list1").children(".icon-f11").addClass("type-icon-active"),$("#type-nav-list1").children(".icon-xiajiantou").removeClass("type-icon-active"))}),$(".seach-option").on("touchstart",".option-list",function(){e($(this),".option-list"),$("body").addClass("body"),$(".menu-list-child").css("display","block"),e($(this),".menu-list","menu-li-ac")}),$("#type-nav-list1").on("touchstart",function(){var t=$(this),e=$(".type-list-child"),i=t.children(".icon-f11");s(t),i.is(".type-icon-active")?e.fadeOut(200):(e.fadeIn(200),$("body").addClass("body")),$(".menu-list-child").css("display","none")}),$("#type-nav-list2").on("touchstart",function(){s($(this))}),$(".search-nav-blick").on("touchstart",".list-font-blick",function(){var t=$(this).index(),e=$(".type-nav-box .font-text1"),s=$(".list-font-blick").eq(t).children("span").eq(0).text();e.text(s),$(".list-font-blick").removeClass("blick-acrive").eq(t).addClass("blick-acrive").parents(".type-list-child").fadeOut(200),e.siblings(".icon-xiajiantou").removeClass("type-icon-active"),e.siblings(".icon-f11").addClass("type-icon-active"),$("body").removeClass("body")}),$(".type-nav-last").on("touchstart",function(){s($(this),".icon-viewgallery",".icon-viewlist"),t($(".list_wrapper"),"list_wrapper-active")}),$("#type-nav-list3").on("touchstart",function(){var e=$(this).children(".type-bg");t($(this),"type-font-active"),t(e,"type-bg-avtive")}),$(".option-list1").on("touchstart",function(){t($(this),"type-font-active")})}(),$(".menu-box").on("touchstart",".menu-item",function(){var t=$(this).parent().children();this!=t[0]?(t.eq(0).removeClass("menu-item-active"),$(this).addClass("menu-item-active")):(t.removeClass("menu-item-active"),$(this).addClass("menu-item-active"))}),$(".reset").on("touchstart",function(){$(".menu-item").removeClass("menu-item-active"),$(".menu-list").each(function(){$(this).children().eq(0).addClass("menu-item-active")})}),$(".confirm").on("touchstart",function(){$(this).parents(".menu-list-child").css("display","none"),$("body").removeClass("body")}),$(".sddr").on("touchstart",function(){$(".screen-sddr").css("display","block","top",".8rem")}),$(".sddr-te").on("touchstart",function(){$(this).parents(".screen-sddr").css("display","none")}),$(".screen-sddr-box").on("touchstart",".screen-sddr-list",function(){var t=$(this).parent().children(),e=$(this).index();t.removeClass("menu-sddr-active").eq(e).addClass("menu-sddr-active")});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlYXJjaHBhZ2UuanMiXSwibmFtZXMiOlsiJCIsIm9uIiwiZmFkZUluIiwiY2hpbGRyZW4iLCJhbmltYXRlIiwibGVmdCIsImZpbmQiLCJhZGRDbGFzcyIsInRoaXMiLCJwYXJlbnRzIiwiZmFkZU91dCIsImNzcyIsInJlbW92ZUNsYXNzIiwiZ2V0SXNDbGFzcyIsIm9iaiIsInR5cGUiLCJpcyIsImdldGlTYWN0aXZlIiwiY2hpbGQxIiwiYWN0aXZlIiwiX3RoaXMiLCJpbmRleCIsImVxIiwiZ2V0SVNCbG9jayIsImljb24iLCJpY29uMiIsIml0ZW0iLCJpdGVtMSIsImljbzEiLCJpY28yIiwiaWNvbmZvbnQiLCJpY29uZm9udDIiLCJjaGlsZCIsImZvbnRfdGV4dDEiLCJzcGFuMSIsInRleHQiLCJzaWJsaW5ncyIsInR5cGVfYmciLCJtdGViIiwicGFyZW50IiwiZWFjaCIsInBhciJdLCJtYXBwaW5ncyI6IkFBR1FBLEVBQUUsZUFBZUMsR0FBRyxhQUFhLFdBQzdCRCxFQUFFLGlCQUFpQkUsT0FBTyxLQUFLQyxTQUFTLGlCQUFpQkMsU0FDckRDLEtBQU8sT0FDUixLQUFLQyxLQUFLLFNBQVNGLFNBQ2xCQyxLQUFPLE9BQ1QsS0FDRkwsRUFBRSxRQUFRTyxTQUFTLFVBRXZCUCxFQUFFLGNBQWNDLEdBQUcsYUFBYSxXQUM1QkQsRUFBRVEsTUFBTUMsUUFBUSxpQkFBaUJDLFVBQVVKLEtBQUssaUJBQWlCSyxJQUFJLE9BQVEsUUFBUVIsU0FBUyxjQUFjUSxJQUFJLE9BQU8sUUFDdkhYLEVBQUUsUUFBUVksWUFBWSxVQUloQyxXQUlNLFNBQVNDLEVBQVdDLEVBQUlDLEdBQ2ZELEVBQUlFLEdBQUcsSUFBTUQsR0FHZEQsRUFBSUYsWUFBWUcsR0FGaEJELEVBQUlQLFNBQVNRLEdBTXJCLFNBQVNFLEVBQVlILEVBQUlJLEVBQU9DLEdBQzVCLElBQUlBLEVBQVNBLEdBQWtCLG1CQUMzQkMsRUFBUU4sRUFBSU8sUUFDaEJyQixFQUFFa0IsR0FBUU4sWUFBWU8sR0FBUUcsR0FBR0YsR0FBT2IsU0FBU1ksR0FvQnJELFNBQVNJLEVBQVdULEVBQUtVLEVBQU1DLEVBQU9DLEdBQ2xDLElBQUlDLEVBQVFELEdBQWMsbUJBQ3RCRSxFQUFPSixHQUFjLFlBQ3JCSyxFQUFPSixHQUFlLG1CQUN0QkssRUFBV2hCLEVBQUlYLFNBQVN5QixHQUN4QkcsRUFBWWpCLEVBQUlYLFNBQVMwQixHQUN6QkMsRUFBU2QsR0FBRyxJQUFNVyxJQUNsQkcsRUFBU2xCLFlBQVllLEdBQ3JCSSxFQUFVeEIsU0FBU29CLEtBRW5CRyxFQUFTdkIsU0FBU29CLEdBQ2xCSSxFQUFVbkIsWUFBWWUsSUE1Q2hCM0IsRUFBRSxnQkFnQmhCQSxFQUFFLGlCQUFpQkMsR0FBRyxhQUFjLGlCQUFrQixXQUNsRGdCLEVBQVlqQixFQUFFUSxNQUFPLGtCQUNqQkEsTUFBUVIsRUFBRSxtQkFBbUIsS0FDN0JBLEVBQUUsb0JBQW9CVSxRQUFRLEtBQzlCVixFQUFFLFFBQVFZLFlBQVksUUFDdEJaLEVBQUUsbUJBQW1CRyxTQUFTLGFBQWFJLFNBQVMsb0JBQ3BEUCxFQUFFLG1CQUFtQkcsU0FBUyxvQkFBb0JTLFlBQVksdUJBSXRFWixFQUFFLGlCQUFpQkMsR0FBRyxhQUFhLGVBQWdCLFdBQy9DZ0IsRUFBWWpCLEVBQUVRLE1BQU8sZ0JBQ3JCUixFQUFFLFFBQVFPLFNBQVMsUUFDbkJQLEVBQUUsb0JBQW9CVyxJQUFJLFVBQVUsU0FDcENNLEVBQVlqQixFQUFFUSxNQUFPLGFBQWEsZ0JBa0J0Q1IsRUFBRSxtQkFBbUJDLEdBQUcsYUFBYyxXQUVsQyxJQUFJbUIsRUFBUXBCLEVBQUVRLE1BQ1Z3QixFQUFRaEMsRUFBRSxvQkFDVndCLEVBQU9KLEVBQU1qQixTQUFTLGFBQzFCb0IsRUFBV0gsR0FDUEksRUFBS1IsR0FBRyxxQkFDUmdCLEVBQU10QixRQUFRLE1BRWRzQixFQUFNOUIsT0FBTyxLQUNiRixFQUFFLFFBQVFPLFNBQVMsU0FFdkJQLEVBQUUsb0JBQW9CVyxJQUFJLFVBQVUsVUFJeENYLEVBQUUsbUJBQW1CQyxHQUFHLGFBQWMsV0FDbENzQixFQUFXdkIsRUFBRVEsU0FHakJSLEVBQUUscUJBQXFCQyxHQUFHLGFBQWEsbUJBQW1CLFdBQ3RELElBQUltQixFQUFRcEIsRUFBRVEsTUFBTWEsUUFDaEJZLEVBQWFqQyxFQUFFLDZCQUNka0MsRUFBUWxDLEVBQUUsb0JBQW9Cc0IsR0FBR0YsR0FBT2pCLFNBQVMsUUFBUW1CLEdBQUcsR0FBR2EsT0FFcEVGLEVBQVdFLEtBQUtELEdBQ2hCbEMsRUFBRSxvQkFBb0JZLFlBQVksZ0JBQWdCVSxHQUFHRixHQUFPYixTQUFTLGdCQUFnQkUsUUFBUSxvQkFBb0JDLFFBQVEsS0FDekh1QixFQUFXRyxTQUFTLG9CQUFvQnhCLFlBSHJCLG9CQUluQnFCLEVBQVdHLFNBQVMsYUFBYTdCLFNBSmQsb0JBS25CUCxFQUFFLFFBQVFZLFlBQVksVUFLMUJaLEVBQUUsa0JBQWtCQyxHQUFHLGFBQWMsV0FDakNzQixFQUFXdkIsRUFBRVEsTUFBTyxvQkFBb0Isa0JBQ3hDSyxFQUFXYixFQUFFLGlCQUFpQix5QkFHdENBLEVBQUUsbUJBQW1CQyxHQUFHLGFBQWMsV0FDbEMsSUFBSW9DLEVBQVVyQyxFQUFFUSxNQUFNTCxTQUFTLFlBQy9CVSxFQUFXYixFQUFFUSxNQUFPLG9CQUNwQkssRUFBV3dCLEVBQVMsb0JBR3hCckMsRUFBRSxpQkFBaUJDLEdBQUcsYUFBYyxXQUNoQ1ksRUFBV2IsRUFBRVEsTUFBTyxzQkFoRzNCLEdBdUdHUixFQUFFLGFBQWFDLEdBQUcsYUFBYyxhQUFjLFdBQzFDLElBQUlxQyxFQUFPdEMsRUFBRVEsTUFBTStCLFNBQVNwQyxXQUN4QkssTUFBUThCLEVBQUssSUFDYkEsRUFBS2hCLEdBQUcsR0FBR1YsWUFBWSxvQkFDdkJaLEVBQUVRLE1BQU1ELFNBQVMsc0JBRWpCK0IsRUFBSzFCLFlBQVksb0JBQ2pCWixFQUFFUSxNQUFNRCxTQUFTLHVCQUl6QlAsRUFBRSxVQUFVQyxHQUFHLGFBQWMsV0FDekJELEVBQUUsY0FBY1ksWUFBWSxvQkFDNUJaLEVBQUUsY0FBY3dDLEtBQUssV0FDakJ4QyxFQUFFUSxNQUFNTCxXQUFXbUIsR0FBRyxHQUFHZixTQUFTLHdCQUkxQ1AsRUFBRSxZQUFZQyxHQUFHLGFBQWMsV0FDM0JELEVBQUVRLE1BQU1DLFFBQVEsb0JBQW9CRSxJQUFJLFVBQVcsUUFDbkRYLEVBQUUsUUFBUVksWUFBWSxVQWlCMUJaLEVBQUUsU0FBU0MsR0FBRyxhQUFhLFdBQ3ZCRCxFQUFFLGdCQUFnQlcsSUFBSSxVQUFVLFFBQVEsTUFBTSxXQUdsRFgsRUFBRSxZQUFZQyxHQUFHLGFBQWEsV0FDMUJELEVBQUVRLE1BQU1DLFFBQVEsZ0JBQWdCRSxJQUFJLFVBQVUsVUFHbERYLEVBQUUsb0JBQW9CQyxHQUFHLGFBQWEsb0JBQXFCLFdBQ3ZELElBQUl3QyxFQUFNekMsRUFBRVEsTUFBTStCLFNBQVNwQyxXQUN2QmlCLEVBQVFwQixFQUFFUSxNQUFNYSxRQUNwQm9CLEVBQUk3QixZQUFZLG9CQUFvQlUsR0FBR0YsR0FBT2IsU0FBUyIsImZpbGUiOiJTZWFyY2hwYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/nrZvpgIlcclxuOyhmdW5jdGlvbigpe1xyXG4gICAgLy/oj5zljZXmmL7npLpcclxuICAgICAgICAkKCcuc2VhY2gtZm9udCcpLm9uKCd0b3VjaHN0YXJ0JyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKCcuc2VhY2gtc2NyZWVuJykuZmFkZUluKDEwMCkuY2hpbGRyZW4oJy5zY3JlZW4tY2hsaWQnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIFwibGVmdFwiOicyMCUnXHJcbiAgICAgICAgICAgIH0sIDIwMCkuZmluZCgnLnRldGUnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICdsZWZ0JzonMjAlJ1xyXG4gICAgICAgICAgICB9LDIwMCk7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnYm9keScpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKCcuc2NyZWVuLXRlJykub24oJ3RvdWNoc3RhcnQnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLnNlYWNoLXNjcmVlbicpLmZhZGVPdXQoKS5maW5kKCcuc2NyZWVuLWNobGlkJykuY3NzKCdsZWZ0JywgJzEwMCUnKS5jaGlsZHJlbignLnNjcmVlbi10ZScpLmNzcygnbGVmdCcsJzEwMCUnKVxyXG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2JvZHknKVxyXG4gICAgICAgIH0pXHJcbn0oKSlcclxuLy/lr7zoiKrkuovku7ZcclxuOyhmdW5jdGlvbigpe1xyXG4gICAgLy9sb2FkaW5n5pi+56S6XHJcbiAgICAgICAgdmFyIGxvYWRJbmcgPSAkKCcuZHVjLWxvYWRpbmcnKVxyXG4gICAgLy/liKTmlq3mmK/lkKbmnInlgLwo5bCB6KOFKVxyXG4gICAgICAgIGZ1bmN0aW9uIGdldElzQ2xhc3Mob2JqLHR5cGUpe1xyXG4gICAgICAgICAgICBpZiAoIW9iai5pcygnLicgKyB0eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgb2JqLmFkZENsYXNzKHR5cGUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvYmoucmVtb3ZlQ2xhc3ModHlwZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIC8v5pi+56S65YWs5YWx5qC35byP5bCB6KOF77yI5paH5a2X5Y+Y6Imy77yJXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0aVNhY3RpdmUob2JqLGNoaWxkMSxhY3RpdmUpIHtcclxuICAgICAgICAgICAgdmFyIGFjdGl2ZSA9IGFjdGl2ZSA/IGFjdGl2ZSA6ICd0eXBlLWZvbnQtYWN0aXZlJztcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gb2JqLmluZGV4KCk7XHJcbiAgICAgICAgICAgICQoY2hpbGQxKS5yZW1vdmVDbGFzcyhhY3RpdmUpLmVxKF90aGlzKS5hZGRDbGFzcyhhY3RpdmUpO1xyXG4gICAgICAgIH1cclxuICAgIC8v54K55Ye75pi+56S6KHR5cGUtbmF25Y+Y6ImyKVxyXG4gICAgICAgICQoJy50eXBlLW5hdi1ib3gnKS5vbigndG91Y2hzdGFydCcsICcudHlwZS1uYXYtbGlzdCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZ2V0aVNhY3RpdmUoJCh0aGlzKSwgJy50eXBlLW5hdi1saXN0JylcclxuICAgICAgICAgICAgaWYgKHRoaXMgIT0gJCgnI3R5cGUtbmF2LWxpc3QxJylbMF0pe1xyXG4gICAgICAgICAgICAgICAgJCgnLnR5cGUtbGlzdC1jaGlsZCcpLmZhZGVPdXQoMTAwKTtcclxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnYm9keScpXHJcbiAgICAgICAgICAgICAgICAkKCcjdHlwZS1uYXYtbGlzdDEnKS5jaGlsZHJlbignLmljb24tZjExJykuYWRkQ2xhc3MoJ3R5cGUtaWNvbi1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgJCgnI3R5cGUtbmF2LWxpc3QxJykuY2hpbGRyZW4oJy5pY29uLXhpYWppYW50b3UnKS5yZW1vdmVDbGFzcygndHlwZS1pY29uLWFjdGl2ZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgLy/ngrnlh7vmmL7npLoo6YCJ6aG55Y+Y6ImyKVxyXG4gICAgICAgICQoJy5zZWFjaC1vcHRpb24nKS5vbigndG91Y2hzdGFydCcsJy5vcHRpb24tbGlzdCcsIGZ1bmN0aW9uICgpIHsgIFxyXG4gICAgICAgICAgICBnZXRpU2FjdGl2ZSgkKHRoaXMpLCAnLm9wdGlvbi1saXN0JylcclxuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdib2R5JylcclxuICAgICAgICAgICAgJCgnLm1lbnUtbGlzdC1jaGlsZCcpLmNzcygnZGlzcGxheScsJ2Jsb2NrJylcclxuICAgICAgICAgICAgZ2V0aVNhY3RpdmUoJCh0aGlzKSwgJy5tZW51LWxpc3QnLCdtZW51LWxpLWFjJykgXHJcbiAgICAgICAgfSlcclxuICAgIC8v5pi+56S65YWs5YWx5YiG5bCB6KOF5qC35byPXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0SVNCbG9jayhvYmosIGljb24sIGljb24yLCBpdGVtKXtcclxuICAgICAgICAgICAgdmFyIGl0ZW0xID0gaXRlbSA/IGl0ZW0gOiAndHlwZS1pY29uLWFjdGl2ZSdcclxuICAgICAgICAgICAgdmFyIGljbzEgPSBpY29uID8gaWNvbiA6ICcuaWNvbi1mMTEnXHJcbiAgICAgICAgICAgIHZhciBpY28yID0gaWNvbjIgPyBpY29uMiA6Jy5pY29uLXhpYWppYW50b3UnXHJcbiAgICAgICAgICAgIHZhciBpY29uZm9udCA9IG9iai5jaGlsZHJlbihpY28xKTtcclxuICAgICAgICAgICAgdmFyIGljb25mb250MiA9IG9iai5jaGlsZHJlbihpY28yKVxyXG4gICAgICAgICAgICBpZiAoaWNvbmZvbnQuaXMoJy4nICsgaXRlbTEpKSB7XHJcbiAgICAgICAgICAgICAgICBpY29uZm9udC5yZW1vdmVDbGFzcyhpdGVtMSlcclxuICAgICAgICAgICAgICAgIGljb25mb250Mi5hZGRDbGFzcyhpdGVtMSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGljb25mb250LmFkZENsYXNzKGl0ZW0xKVxyXG4gICAgICAgICAgICAgICAgaWNvbmZvbnQyLnJlbW92ZUNsYXNzKGl0ZW0xKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgLy/mmL7npLrlr7nlupTnmoTlupTnlKjvvIjnu7zlkIjmmL7npLrvvIlcclxuICAgICAgICAkKCcjdHlwZS1uYXYtbGlzdDEnKS5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIC8vIGUuc3RvcFByb3BhZ2V0aW9uKCk7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBjaGlsZCA9ICQoJy50eXBlLWxpc3QtY2hpbGQnKTtcclxuICAgICAgICAgICAgdmFyIGljb24gPSBfdGhpcy5jaGlsZHJlbignLmljb24tZjExJyk7XHJcbiAgICAgICAgICAgIGdldElTQmxvY2soX3RoaXMpXHJcbiAgICAgICAgICAgIGlmIChpY29uLmlzKCcudHlwZS1pY29uLWFjdGl2ZScpKXtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmZhZGVPdXQoMjAwKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5mYWRlSW4oMjAwKTtcclxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnYm9keScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCgnLm1lbnUtbGlzdC1jaGlsZCcpLmNzcygnZGlzcGxheScsJ25vbmUnKVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgLy8g5Yik5pat5Lu35qC8XHJcbiAgICAgICAgJCgnI3R5cGUtbmF2LWxpc3QyJykub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGdldElTQmxvY2soJCh0aGlzKSlcclxuICAgICAgICB9KVxyXG4gICAgLy/ngrnlh7vmuLLmn5N0ZXh0XHJcbiAgICAgICAgJCgnLnNlYXJjaC1uYXYtYmxpY2snKS5vbigndG91Y2hzdGFydCcsJy5saXN0LWZvbnQtYmxpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9ICQodGhpcykuaW5kZXgoKTtcclxuICAgICAgICAgICAgdmFyIGZvbnRfdGV4dDEgPSAkKFwiLnR5cGUtbmF2LWJveCAuZm9udC10ZXh0MVwiKVxyXG4gICAgICAgICAgICB2YXIgIHNwYW4xID0gJCgnLmxpc3QtZm9udC1ibGljaycpLmVxKF90aGlzKS5jaGlsZHJlbignc3BhbicpLmVxKDApLnRleHQoKVxyXG4gICAgICAgICAgICB2YXIgIHR5cGVfYWN0aXZlID0gJ3R5cGUtaWNvbi1hY3RpdmUnXHJcbiAgICAgICAgICAgIGZvbnRfdGV4dDEudGV4dChzcGFuMSk7XHJcbiAgICAgICAgICAgICQoJy5saXN0LWZvbnQtYmxpY2snKS5yZW1vdmVDbGFzcygnYmxpY2stYWNyaXZlJykuZXEoX3RoaXMpLmFkZENsYXNzKCdibGljay1hY3JpdmUnKS5wYXJlbnRzKCcudHlwZS1saXN0LWNoaWxkJykuZmFkZU91dCgyMDApO1xyXG4gICAgICAgICAgICBmb250X3RleHQxLnNpYmxpbmdzKCcuaWNvbi14aWFqaWFudG91JykucmVtb3ZlQ2xhc3ModHlwZV9hY3RpdmUpXHJcbiAgICAgICAgICAgIGZvbnRfdGV4dDEuc2libGluZ3MoJy5pY29uLWYxMScpLmFkZENsYXNzKHR5cGVfYWN0aXZlKVxyXG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2JvZHknKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAvL+eCueWHu+WPmOaNouaYvuekuuaWueW8j1xyXG4gICAgICAgICQoJy50eXBlLW5hdi1sYXN0Jykub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGdldElTQmxvY2soJCh0aGlzKSwgJy5pY29uLXZpZXdnYWxsZXJ5JywnLmljb24tdmlld2xpc3QnKSBcclxuICAgICAgICAgICAgZ2V0SXNDbGFzcygkKCcubGlzdF93cmFwcGVyJyksJ2xpc3Rfd3JhcHBlci1hY3RpdmUnKVxyXG4gICAgICAgIH0pXHJcbiAgICAvL+eCueWHu+WPmOaNouiDjOaZr+WbvueJh++8iOS/g+mUgO+8iVxyXG4gICAgJCgnI3R5cGUtbmF2LWxpc3QzJykub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHR5cGVfYmcgPSAkKHRoaXMpLmNoaWxkcmVuKCcudHlwZS1iZycpXHJcbiAgICAgICAgZ2V0SXNDbGFzcygkKHRoaXMpLCAndHlwZS1mb250LWFjdGl2ZScpXHJcbiAgICAgICAgZ2V0SXNDbGFzcyh0eXBlX2JnLCAndHlwZS1iZy1hdnRpdmUnKVxyXG4gICAgfSlcclxuICAgIC8v54K55Ye75Y+Y5YyW5a2X5L2T77yI6Ieq6JCl77yJXHJcbiAgICAkKCcub3B0aW9uLWxpc3QxJykub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZ2V0SXNDbGFzcygkKHRoaXMpLCAndHlwZS1mb250LWFjdGl2ZScpXHJcbiAgICB9KVxyXG4gICAgXHJcbn0oKSlcclxuLy/oj5zljZXkuovku7ZcclxuOyhmdW5jdGlvbigpe1xyXG4gICAgLy/ngrnlh7voj5zljZXvvIjlhoXlrrnvvIlcclxuICAgICQoJy5tZW51LWJveCcpLm9uKCd0b3VjaHN0YXJ0JywgJy5tZW51LWl0ZW0nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG10ZWIgPSAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKCk7XHJcbiAgICAgICAgaWYgKHRoaXMgIT0gbXRlYlswXSkge1xyXG4gICAgICAgICAgICBtdGViLmVxKDApLnJlbW92ZUNsYXNzKCdtZW51LWl0ZW0tYWN0aXZlJylcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbWVudS1pdGVtLWFjdGl2ZScpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbXRlYi5yZW1vdmVDbGFzcygnbWVudS1pdGVtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ21lbnUtaXRlbS1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLy/ngrnlh7vph43nva5cclxuICAgICQoJy5yZXNldCcpLm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIubWVudS1pdGVtXCIpLnJlbW92ZUNsYXNzKCdtZW51LWl0ZW0tYWN0aXZlJylcclxuICAgICAgICAkKFwiLm1lbnUtbGlzdFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbigpLmVxKDApLmFkZENsYXNzKCdtZW51LWl0ZW0tYWN0aXZlJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICAvL+eCueWHu+ehruiupFxyXG4gICAgJCgnLmNvbmZpcm0nKS5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5tZW51LWxpc3QtY2hpbGQnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXHJcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdib2R5JylcclxuICAgIH0pXHJcbn0oKSlcclxuLy/ngrnlh7vpgIDlh7pcclxuOyhmdW5jdGlvbigpe1xyXG4gICAgLy/ngrnlh7vpgIDlh7pcclxuICAgICAgICBmdW5jdGlvbiBnZXRFcnJvcihvYmosIHBhcmVuKSB7XHJcbiAgICAgICAgICAgIG9iai5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cyhwYXJlbikuZmFkZU91dCgyMDApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgLy8gZ2V0RXJyb3IoJCgnLnNjcmVlbi10ZScpLCcuc2VhY2gtc2NyZWVuJylcclxuICAgIFxyXG4gICBcclxufSgpKVxyXG47KGZ1bmN0aW9uKCl7XHJcbiAgICAvL+eCueWHu+WHuueOsO+8iOWcsOWdgO+8iVxyXG4gICAgJCgnLnNkZHInKS5vbigndG91Y2hzdGFydCcsZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcuc2NyZWVuLXNkZHInKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycsJ3RvcCcsJy44cmVtJylcclxuICAgIH0pXHJcbiAgICAvL+eCueWHu+WbnuadpVxyXG4gICAgJCgnLnNkZHItdGUnKS5vbigndG91Y2hzdGFydCcsZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5zY3JlZW4tc2RkcicpLmNzcygnZGlzcGxheScsJ25vbmUnKVxyXG4gICAgfSlcclxuICAgIC8v54K55Ye75Yqg5LiKXHJcbiAgICAkKCcuc2NyZWVuLXNkZHItYm94Jykub24oJ3RvdWNoc3RhcnQnLCcuc2NyZWVuLXNkZHItbGlzdCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyID0gJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbigpXHJcbiAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKS5pbmRleCgpXHJcbiAgICAgICAgcGFyLnJlbW92ZUNsYXNzKCdtZW51LXNkZHItYWN0aXZlJykuZXEoX3RoaXMpLmFkZENsYXNzKCdtZW51LXNkZHItYWN0aXZlJylcclxuICAgIH0pXHJcbn0oKSkiXX0=
