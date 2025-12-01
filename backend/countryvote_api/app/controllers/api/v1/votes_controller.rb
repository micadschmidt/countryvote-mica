module Api
  module V1
    class VotesController < ApplicationController
      def create
        user = User.new(vote_params)

        if user.save
          render json: serialize_user(user), status: :created
        else
          render json: { errors: user.errors }, status: :unprocessable_entity
        end
      end

      private

      def vote_params
        params.require(:vote).permit(:name, :email, :country_code)
      end

      def serialize_user(user)
        {
          id: user.id,
          name: user.name,
          email: user.email,
          country_code: user.country_code
        }
      end
    end
  end
end
