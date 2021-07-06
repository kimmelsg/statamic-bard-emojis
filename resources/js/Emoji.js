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
    return () => (state, dispatch) => {
      console.log('stuff', type, state, type.attrs.char);

      const { selection, tr } = state;
      const { from, to } = selection;

      tr.insertText(type.attrs.char, from);
      tr.insertText(type.attrs.char, to + 1);

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
