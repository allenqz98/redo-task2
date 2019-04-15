defmodule TaskTracker.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :email, :string
      add :admin, :boolean, default: false, null: false
      add :manager, references(:users, on_delete: :nilify_all), null: true
      timestamps()
    end

  end
end
