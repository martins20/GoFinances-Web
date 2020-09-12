const formatDate = (date: Date): string =>
  `${new Date(date).getDate()}/${
    new Date(date).getUTCMonth() + 1 < 10
      ? `0${new Date(date).getUTCMonth()}`
      : new Date(date).getUTCMonth()
  }/${new Date(date).getUTCFullYear()}`;

export default formatDate;
