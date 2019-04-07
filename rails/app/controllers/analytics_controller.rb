class AnalyticsController < ApplicationController
  def mock_report
    render json: [
      arrange: 0,
      fairness: 0,
      discipline: 0
    ]
  end
end
