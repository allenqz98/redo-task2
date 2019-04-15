defmodule TaskTracker.Repo.Migrations.CreateAssignment do
  use Ecto.Migration

  def change do
    alter table(:tasks) do
      remove :user_assignment
      add :user_id, references(:users, on_delete: :delete_all)
    end
  end
end
