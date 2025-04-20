<template>
  <div>
    <div class="row">
      <div class="col-12">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6" :class="isRTL ? 'text-right' : 'text-left'">
                <h3 class="card-title">Home</h3>
              </div>
              <div class="col-sm-6 text-right">
                <!-- Manage Volunteers Button -->
                <base-button type="primary" @click="handleManageVolunteers">
                  Manage Volunteers
                </base-button>
              </div>
            </div>
          </template>
          <div class="chart-area">
            <line-chart
              style="height: 100%"
              ref="bigChart"
              chart-id="big-line-chart"
              :chart-data="bigLineChart.chartData"
              :gradient-colors="bigLineChart.gradientColors"
              :gradient-stops="bigLineChart.gradientStops"
              :extra-options="bigLineChart.extraOptions"
            />
          </div>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "@/components/Charts/LineChart";
import * as chartConfigs from "@/components/Charts/config";
import config from "@/config";

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      bigLineChart: {
        allData: [
          [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
        ],
        activeIndex: 0,
        chartData: {
          datasets: [],
          labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        },
        extraOptions: chartConfigs.purpleChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
      },
    };
  },
  computed: {
    isRTL() {
      return this.$rtl.isRTL;
    },
  },
  methods: {
    initBigChart(index) {
      const data = this.bigLineChart.allData[index];
      const chartData = {
        datasets: [
          {
            fill: true,
            borderColor: config.colors.primary,
            pointBackgroundColor: config.colors.primary,
            data,
          },
        ],
        labels: this.bigLineChart.chartData.labels,
      };
      this.$refs.bigChart.updateGradients(chartData);
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    },
    handleManageVolunteers() {
      // Example: navigate to /volunteers
      this.$router.push("/volunteers");
    },
  },
  mounted() {
    this.initBigChart(0);
  },
};
</script>

<style scoped>
.card-title {
  margin-bottom: 0;
}
</style>
