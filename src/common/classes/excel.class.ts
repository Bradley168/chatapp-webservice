import { Style, Workbook, WorkbookOption, Worksheet, WorksheetOption } from 'excel4node';

export class Excel {
  worksheetOption: WorksheetOption = {
    margins: {
      bottom: 0.5,
      footer: 0.3,
      header: 0.3,
      left: 0.45,
      right: 0.45,
      top: 0.5
    },
    printOptions: {
      centerHorizontal: true
    },
    pageSetup: {
      firstPageNumber: 1,
      orientation: 'landscape',
      pageOrder: 'downThenOver',
      paperSize: 'A4_PAPER'
    }
  };

  workbookOption: WorkbookOption = {
    jszip: {
      compression: 'DEFLATE'
    },
    defaultFont: {
      color: 'FF222222',
      name: 'Calibri',
      size: 11
    },
    dateFormat: 'dd-mmm-yyyy hh:mm AM/PM'
  };

  private baseStyle: Style = {
    alignment: {
      horizontal: 'left',
      vertical: 'center'
    },
    border: {
      left: {
        style: 'thin',
        color: 'FF9BC2E6'
      },
      right: {
        style: 'thin',
        color: 'FF9BC2E6'
      },
      top: {
        style: 'thin',
        color: 'FF9BC2E6'
      },
      bottom: {
        style: 'thin',
        color: 'FF9BC2E6'
      },
      diagonal: {
        style: 'thin',
        color: 'FF9BC2E6'
      }
    }
  };

  oddStyle(wb: Workbook) {
    return wb.createStyle({ ...this.baseStyle, fill: { type: 'pattern', patternType: 'solid', fgColor: 'FFDDEBF7' } });
  }

  evenStyle(wb: Workbook) {
    return wb.createStyle({ ...this.baseStyle, fill: { type: 'pattern', patternType: 'solid', fgColor: 'FFFFFFFF' } });
  }

  headStyle(wb: Workbook) {
    return wb.createStyle({
      font: {
        bold: true,
        color: 'FFFFFFFF',
        name: 'Calibri',
        size: 11
      },
      fill: {
        type: 'pattern',
        patternType: 'solid',
        fgColor: 'FF5B9BD5'
      }
    });
  }

  headerRow(ws: Worksheet, firstColumn: number, lastColumn: number) {
    ws
      .row(1)
      .freeze()
      .filter({ firstColumn, lastColumn });
  }

  setHeaderCell(ws: Worksheet, style: Style, column: number, columnName: string) {
    ws
      .cell(1, column)
      .style(style)
      .string(columnName);
  }

  setCell(ws: Worksheet, style: Style, row: number, column: number) {
    return ws.cell(row, column).style(style);
  }
}
