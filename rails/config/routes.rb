Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope :v1 do
    resources :samples, only: [] do
      collection do
        get 'sample'
      end
    end
    resources :analytics, only: [] do
      collection do
        get 'mock_report'
      end
    end
    resources :diary, only: [] do
      collection do
        get 'mock_diary'
      end
    end
  end
end
