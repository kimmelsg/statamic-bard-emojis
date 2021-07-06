import EmojisMenu from "./EmojisMenu";

Statamic.$bard.buttons(buttons => {
  const indexOfBold = _.findIndex(buttons, { command: "bold" });
  buttons.splice(indexOfBold, 0, {
    name: "color",
    text: "Emoji",
    command: "emoji",
    args: { color: "yellow" },
    icon: "paint-brush",
    component: EmojisMenu
  });
});

const EmojiPlugin = function () {
  return function (scribe) {
    var command = new scribe.api.command("emoji");

    scribe.commands.emoji = command;

    command.execute = function (param) {
      console.log(param);
      return;
      scribe.transactionManager.run(() => {
        const sel = new scribe.api.Selection();
        const range = sel.range;

        sel.placeMarkers();

        const contents = range.extractContents();

        contents.childNodes.forEach(
          node => (node.textContent = node.textContent.toUpperCase())
        );

        range.insertNode(contents);

        sel.selection.removeAllRanges();
        sel.selection.addRange(range);

        sel.removeMarkers();
      });
    };
  };
};

Statamic.booting(() => {
    Statamic.$components.register('example-fieldtype', ExampleFieldtype);
    Statamic.$bard.plugins.push(EmojiPlugin);
});
