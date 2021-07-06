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

export default class Emoji {
  name() {
    return "Emoji";
  }

  plugins() {
    return [EmojiPlugin];
  }

  schema() {
    return {};
  }
}
