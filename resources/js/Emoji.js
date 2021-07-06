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
      toDOM: (mark) => {
        console.log(mark, mark.attrs, mark.attrs.char);
        return [props.mark.attrs.char];
      }
    };
  }

  commands({ type }) {
    return () => (state, dispatch) => {
      const { selection } = state;
      const position = selection.anchor;

      const node = type.create();
      dispatch(state.tr.insert(position, node));

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
