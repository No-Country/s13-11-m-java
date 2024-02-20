/* eslint-disable @typescript-eslint/no-unused-vars */
import "@tanstack/react-core";

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    hidden?: boolean;
  }
}
