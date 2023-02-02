import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf({
  duration: 3000,
});

export const NotifyError = (message) => {
  notyf.error(message);
};

export const NotifySuccess = (message) => {
  notyf.success(message);
};
