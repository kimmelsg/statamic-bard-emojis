import EmojisMenu from "./EmojisMenu";
import Emoji from "./Emoji";

Statamic.$bard.extend(({ node }) => node(new Emoji()));
Statamic.$bard.buttons(buttons => {
  const indexOfBold = _.findIndex(buttons, { command: "bold" });
  buttons.splice(indexOfBold, 0, {
    name: "color",
    text: "Emoji",
    command: "emoji",
    args: { char: "" },
    icon: "paint-brush",
    component: EmojisMenu
  });
});
