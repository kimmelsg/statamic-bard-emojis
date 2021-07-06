const { core: commands } = Statamic.$bard.tiptap;
const { markInputRule } = commands;

export default class Emoji {
  name() {
    return "emoji";
  }

  schema() {
    return {
      attrs: {
        char: {
          default: ""
        }
      },
      inline: true,
      group: "inline",
      isBlock: false,
      toDOM: mark => {
        return mark.attrs.char;
      }
    };
  }

  commands({ type }) {
    return (attrs) => (state, dispatch) => {
      console.log('stuff', type, state, attrs.char);

      const { selection, tr } = state;
      const { from, to } = selection;

      tr.insertText(attrs.char, from, to);

      dispatch(tr);

      return true;
    };
  }

  pasteRules({ type }) {
    return [];
  }

  inputRules({ type }) {
    return [markInputRule(/(?:\*\*|__)([^*_]+)(?:\*\*|__)$/, type)];
  }

  plugins() {
    return [];
  }
}
