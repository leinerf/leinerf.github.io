$(".character-portrait").click(function () {
    var clickedPortrait = $(this);
    var deactivateThisPortrait, activateDescription, deactivateDescription;

    if (clickedPortrait.attr('id') == 'main-character') {
        deactivateThisPortrait = $("#sister");
        activateDescription = $("#Leif-Ellps-description");
        deactivateDescription = $("#Jade-Ellps-description");
    }
    else {
        deactivateThisPortrait = $("#main-character");
        activateDescription = $("#Jade-Ellps-description");
        deactivateDescription = $("#Leif-Ellps-description");
    }
    toggleActivePortrait(clickedPortrait, deactivateThisPortrait);
    toggleActivateDescription(activateDescription, deactivateDescription);
})

toggleActivePortrait = function (activateThis, deactivateThis) {
    activateThis.find("img").attr('id', 'character-active');
    deactivateThis.find("img").removeAttr('id');
}

toggleActivateDescription = function (activateThis, deactivateThis) {
    console.log(activateThis);
    console.log(deactivateThis)
    activateThis.removeClass("display-none");
    deactivateThis.addClass("display-none");
}

var imageArray = [
    "assets/images/full_moon.jpg", 
    "assets/images/sister_drag_to_hell.jpg", 
    "assets/images/wildfire.jpg", 
    "assets/images/sister_magic.jpg",
    "assets/images/mc_studying.jpg",
    "assets/images/sibling_bonding.jpg",
    "assets/images/sister_in_hell.jpg"
]

$("i.fa-chevron-right").click(function () {
    var imageElement = imageArray.splice(0, 1);
    imageArray.push(imageElement);
    renderImagesOnGallary(imageArray);
});

$("i.fa-chevron-left").click(function () {
    var imageElement = imageArray.splice(imageArray.length - 1, 1);
    imageArray.unshift(imageElement);
    renderImagesOnGallary(imageArray);
});

renderImagesOnGallary = function (arr) {
    $("img.artwork-image-lg").attr("src", imageArray[0])
    var smallArtworks = $(".artwork-image-sm");
    for (var i = 0; i < smallArtworks.length; i++) {
        var smallArtwork = $(smallArtworks[i]);
        smallArtwork.attr("src", imageArray[i + 1]);
    }
}