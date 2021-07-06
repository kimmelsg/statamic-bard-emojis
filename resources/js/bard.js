import EmojiMenu from "./EmojiMenu";

Statamic.$bard.buttons(buttons => {
  const indexOfBold = _.findIndex(buttons, { command: "bold" });
  buttons.splice(indexOfBold, 0, {
    name: "color",
    text: "Emoji",
    command: "emoji",
    args: { color: "yellow" },
    icon: "paint-brush",
    component: EmojiMenu
  });
});
