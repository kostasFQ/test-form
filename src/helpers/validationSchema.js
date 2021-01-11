import Schema from "validate";

const schemas = {
  paid: new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      length: { max: 140 },
      message: {
        length: "140 symbols or less",
      },
    },
    category_id: {
      type: Number,
    },
    paid_event: {
      type: Boolean,
    },
    revard: {
      type: Number,
      required: true
    },
    coordinator: {
      id: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: false,
      },
    },
    date: {
      type: String,
      required: true,
      message: "set a start date",
    },
    duration: {
      type: Number,
    },
  }),
  free: new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      length: { max: 140 },
      message: {
        length: "140 symbols or less",
      },
    },
    category_id: {
      type: Number,
    },
    paid_event: {
      type: Boolean,
    },
    revard: {
      type: Number,
    },
    coordinator: {
      id: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: false,
      },
    },
    date: {
      type: String,
      required: true,
      message: "set a start date",
    },
    duration: {
      type: Number,
    },
  }),
};

export default schemas;