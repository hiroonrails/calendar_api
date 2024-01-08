# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                 :integer         not null, primary key
#  name               :string(255)
#  email              :string(255)
#  password           :string(255)
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class User < ActiveRecord::Base

  #----------------------------------------
  #  ** Includes **
  #----------------------------------------

  include DeviseTokenAuth::Concerns::User

  #----------------------------------------
  #  ** Constants **
  #----------------------------------------

  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :validatable

  #----------------------------------------
  #  ** Enums **
  #----------------------------------------

  #----------------------------------------
  #  ** Validations **
  #----------------------------------------

  #----------------------------------------
  #  ** Associations **
  #----------------------------------------

  has_one :calendar_event

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
