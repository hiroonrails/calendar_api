# == Schema Information
#
# Table name: calendar_events
#
#  id                 :integer         not null, primary key
#  title              :string(255)
#  description        :string(255)
#  start_date         :string(255)
#  end_date           :string(255)
#  user_id            :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class CalendarEvent < ActiveRecord::Base

    #----------------------------------------
    #  ** Includes **
    #----------------------------------------
  
    #----------------------------------------
    #  ** Constants **
    #----------------------------------------
  
    #----------------------------------------
    #  ** Enums **
    #----------------------------------------
  
    #----------------------------------------
    #  ** Validations **
    #----------------------------------------
  
    #----------------------------------------
    #  ** Associations **
    #----------------------------------------

    belongs_to :user
  
    #----------------------------------------
    #  ** Delegates **
    #----------------------------------------
  
    #----------------------------------------
    #  ** Scopes **
    #----------------------------------------
  
    #----------------------------------------
    #  ** Methods **
    #----------------------------------------
  
  end
  