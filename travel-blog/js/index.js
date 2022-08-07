M.AutoInit();

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, { "height": 535, "indicators": false, "interval": 3000, "duration": 1000 });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, {"scrollOffset": 60});
  });

const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
        "France": null,
        "Italy": null,
        "Greece": null,
        "Germany": null,
        "Netherland": null,
        "Canada": null,
        "Iran": null,
        "Thailand": null,
        "Spain": null,
        "Brazil": null,
        "Ireland": null,
        "Portugal": null,
        "New Zealand": null,
        "Australia": null,
        "Mexico": null,
        "Switzerland": null,
    }
});