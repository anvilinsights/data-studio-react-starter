/**
 * This file provides the mock "data" received
 * by your visualization code when you develop
 * locally.
 *
 */
export const message = {
  tables: {
    DEFAULT: [
      {
        dimID: ['Campaign 1'],
        metricID: [16, 329, 1],
      },
      {
        dimID: ['Campaign 2'],
        metricID: [31, 1002, 4],
      },
      {
        dimID: ['Campaign 3'],
        metricID: [51, 1231, 11],
      },
      {
        dimID: ['Campaign 4'],
        metricID: [41, 1522, 16],
      },
    ],
  },
  fields: {
    dimID: [
      {
        id: 'qt_nzqx6a0xvb',
        name: 'Campaign',
        type: 'TEXT',
        concept: 'DIMENSION',
      },
    ],
    metricID: [
      {
        id: 'qt_8isx6a0xvb',
        name: 'Clicks',
        type: 'NUMBER',
        concept: 'METRIC',
      },
      {
        id: 'qt_8isx6a0xvc',
        name: 'Impressions',
        type: 'NUMBER',
        concept: 'METRIC',
      },
      {
        id: 'qt_8isx6asdf0xvc',
        name: 'Conversions',
        type: 'NUMBER',
        concept: 'METRIC',
      },
    ],
  },
  style: {
    cellBackgroundColor: {
      value: {
        color: '#d1d1d1',
        opacity: 1,
      },
      defaultValue: {
        color: '#d9d9d9',
      },
    },
  },
}
