class LineItemDate < ApplicationRecord
  belongs_to :quote
  has_many :line_items, dependent: :destroy
  
  validates :date, presence: true, uniqueness: {scope: :quote_id}
  # before_create_commit -> {broadcast_prepend_to "line_item_dates", target: "line_item_dates"}

  def previous_date
    quote.line_item_dates.where("date < ?", date).last
  end
end
