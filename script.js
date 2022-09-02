function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    $('#name').text(profile.getName());
    $('#email').text(profile.getEmail());
    $("#image").attr('src', profile.getImageUrl());
    $(".data").css("display","block");
    $(".g-signin2").css("display","none");
    console.log(profile)
    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
}
