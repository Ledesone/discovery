Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope :v1 do
    resources :samples, only: [] do
      collection do
        get 'sample'
      end
    end
  end
end
