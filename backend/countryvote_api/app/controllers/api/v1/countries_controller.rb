module Api
  module V1
    class CountriesController < ApplicationController
      def top
        top_countries = TopCountriesService.call
        render json: top_countries, status: :ok
      end

      def index
        countries = RestCountriesService.all_for_dropdown
        render json: countries, status: :ok
      end
    end
  end
end
