class Quote < ApplicationRecord
  belongs_to :company
  has_many :line_item_dates, dependent: :destroy

  after_create_commit -> {broadcast_prepend_to "all_quotes", target: "all_quotes"}
  after_update_commit -> { broadcast_replace_to "all_quotes" }
  after_destroy_commit -> {broadcast_remove_to "list_quotes"}

  validates :quote, presence: true
end
