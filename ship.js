Hull.onEmbed(document, function(element, deployment) {
  var color = deployment.ship.settings.color;
  var wording = deployment.ship.translations.en.hello;

  element.innerHTML = '<h1 style="color: ' + color + '">' + wording + '</h1>';
});

