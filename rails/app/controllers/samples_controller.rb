class SamplesController < ApplicationController
  def sample
    render json: [result: 'sample']
  end
end
