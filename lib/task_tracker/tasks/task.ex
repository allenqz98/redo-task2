defmodule TaskTracker.Tasks.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tasks" do
    field :desc, :string
    field :name, :string
    field :task_status, :boolean, default: false
    field :work_time, :integer
    has_many :time_block, TaskTracker.TimeBlocks.TimeBlock
    belongs_to :user, TaskTracker.Users.User

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:name, :desc, :work_time, :task_status, :user_id])
    |> validate_required([:name, :desc, :work_time, :task_status, :user_id])
  end
end
