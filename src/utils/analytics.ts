import { AnalyticsData } from './definitions';

export const analytics: AnalyticsData = {
  yesterday: {
    closedSupportGraphic: {
      total: {
        porcentage: 100,
        value: 28,
      },
      own: {
        porcentage: 25,
        value: 7,
      },
    },
    generalComparisonGraphic: {
      general: [32, 29, 28],
      own: [null, 8, 7],
    },
    statusUpdatesGraphic: {
      openSupport: [
        0, 0, 0, 0, 0, 0, 0, 2, 1, 4, 8, 12, 10, 6, 16, 5, 5, 2, 0, 0, 0, 0, 0, 0,
      ],
      closedSupport: [
        0, 0, 0, 0, 0, 0, 0, 1, 0, 5, 6, 11, 12, 7, 14, 3, 0, 4, 0, 0, 0, 0, 0, 0,
      ],
    },
  },
  last_30_days: {
    closedSupportGraphic: {
      total: {
        porcentage: 100,
        value: 1000,
      },
      own: {
        porcentage: 39,
        value: 390,
      },
    },
    generalComparisonGraphic: {
      general: [1013, 1012, 1000],
      own: [null, 392, 390],
    },
    statusUpdatesGraphic: {
      openSupport: [
        0, 0, 0, 0, 0, 0, 0, 59, 63, 102, 250, 432, 402, 345, 105, 60, 15, 23, 0, 0, 0, 0,
        0, 0,
      ],
      closedSupport: [
        0, 0, 0, 0, 0, 0, 0, 58, 62, 100, 248, 430, 402, 343, 110, 55, 20, 23, 0, 0, 0, 0,
        0, 0,
      ],
    },
  },
  last_6_months: {
    closedSupportGraphic: {
      total: {
        porcentage: 100,
        value: 5400,
      },
      own: {
        porcentage: 21,
        value: 1134,
      },
    },
    generalComparisonGraphic: {
      general: [5438, 5437, 5400],
      own: [null, 1135, 1134],
    },
    statusUpdatesGraphic: {
      openSupport: [
        0, 0, 0, 0, 0, 0, 245, 281, 408, 1808, 1203, 1068, 580, 309, 105, 121, 104, 90, 0,
        0, 0, 0, 0, 0,
      ],
      closedSupport: [
        0, 0, 0, 0, 0, 0, 240, 282, 415, 1709, 1207, 1051, 579, 308, 132, 98, 101, 68, 0,
        0, 0, 0, 0, 0,
      ],
    },
  },
  last_12_months: {
    closedSupportGraphic: {
      total: {
        porcentage: 100,
        value: 10000,
      },
      own: {
        porcentage: 12,
        value: 1200,
      },
    },
    generalComparisonGraphic: {
      general: [10041, 10040, 10000],
      own: [null, 1205, 1200],
    },
    statusUpdatesGraphic: {
      openSupport: [
        0, 0, 0, 0, 0, 0, 608, 867, 1267, 2875, 2017, 2045, 1813, 801, 504, 487, 203, 181,
        0, 0, 0, 0, 0, 0,
      ],
      closedSupport: [
        0, 0, 0, 0, 0, 0, 607, 867, 1260, 2890, 1999, 2060, 1864, 756, 450, 380, 204, 154,
        0, 0, 0, 0, 0, 0,
      ],
    },
  },
};
