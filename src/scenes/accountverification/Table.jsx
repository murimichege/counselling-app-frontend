import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import TableMUI from '@material-ui/core/Table';
import TableBodyMUI from '@material-ui/core/TableBody';
import TableCellMUI from '@material-ui/core/TableCell';
import TableHeadMUI from '@material-ui/core/TableHead';
import TableRowMUI from '@material-ui/core/TableRow';
import PaperMUI from '@material-ui/core/Paper';

/**
 * TablePaper
 */
export const TablePaper = withStyles((theme) =>
  createStyles({
    // Example styling
    rounded: {
      borderRadius: 0,
    },
  })
)(PaperMUI);

TablePaper.defaultProps = {
  elevation: 8,
};

/**
 * Table
 */
export const Table = withStyles((theme) =>
  createStyles({
    // Example styling
    root: {
      outline: '2px solid #06c',
    },
  })
)(TableMUI);

/**
 * TableBody
 */
export const TableBody = withStyles((theme) =>
  createStyles({
    // Example styling
    root: {
      fontFamily: "'Helvetica', 'Arial', sans-serif",
    },
  })
)(TableBodyMUI);

/**
 * TableCell
 */
export const TableCell = withStyles((theme) =>
  createStyles({
    // Example styling
    head: {
      color: theme.palette.primary.contrastText,
      backgroundColor: '#06c',
      fontSize: '1rem',
    },
  })
)(TableCellMUI);

/**
 * TableHead
 */
export const TableHead = withStyles((theme) =>
  createStyles({
    // Example styling
  })
)(TableHeadMUI);

/**
 * TableRow
 */
export const TableRow = withStyles((theme) =>
  createStyles({
    // Example styling
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.grey['200'],
      },
      '&:hover': {
        backgroundColor: theme.palette.grey['400'],
      },
    },
    head: {
      height: `${theme.spacing.unit * 8}px`,
    },
  })
)(TableRowMUI);
