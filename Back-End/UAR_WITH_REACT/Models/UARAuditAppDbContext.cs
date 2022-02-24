using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace UAR_WITH_REACT.Models
{
    public partial class UARAuditAppDbContext : DbContext
    {
        public UARAuditAppDbContext()
        {
        }

        public UARAuditAppDbContext(DbContextOptions<UARAuditAppDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TblAccess> TblAccesses { get; set; }
        public virtual DbSet<TblAnnouncement> TblAnnouncements { get; set; }
        public virtual DbSet<TblApprovedRequest> TblApprovedRequests { get; set; }
        public virtual DbSet<TblBatch> TblBatches { get; set; }
        public virtual DbSet<TblChangeRequest> TblChangeRequests { get; set; }
        public virtual DbSet<TblChangeRequestType> TblChangeRequestTypes { get; set; }
        public virtual DbSet<TblCompletedRequest> TblCompletedRequests { get; set; }
        public virtual DbSet<TblInstance> TblInstances { get; set; }
        public virtual DbSet<TblStatus> TblStatuses { get; set; }
        public virtual DbSet<TblSystem> TblSystems { get; set; }
        public virtual DbSet<TblUser> TblUsers { get; set; }
        public virtual DbSet<TblUserAccessRequest> TblUserAccessRequests { get; set; }
        public virtual DbSet<TblUserHierarchy> TblUserHierarchies { get; set; }
        public virtual DbSet<TblVpApproval> TblVpApprovals { get; set; }
        public virtual DbSet<VwActiveUserHierarchy> VwActiveUserHierarchies { get; set; }
        public virtual DbSet<VwAuditKpi> VwAuditKpis { get; set; }
        public virtual DbSet<VwAuditKpiBySystem> VwAuditKpiBySystems { get; set; }
        public virtual DbSet<VwAuditKpiByUser> VwAuditKpiByUsers { get; set; }
        public virtual DbSet<VwJobHistory> VwJobHistories { get; set; }
        public virtual DbSet<VwJobStatus> VwJobStatuses { get; set; }
        public virtual DbSet<VwVpApproval> VwVpApprovals { get; set; }
        public virtual DbSet<VwVpApprovalRequired> VwVpApprovalRequireds { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=B9S6QF2-E7470;Database=UARAuditAppDb;Trusted_Connection=true;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TblAccess>(entity =>
            {
                entity.ToTable("TblAccess");

                entity.HasIndex(e => e.SystemId, "ix_TblAccess_SystemId");

                entity.Property(e => e.Id)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SystemId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.System)
                    .WithMany(p => p.TblAccesses)
                    .HasForeignKey(d => d.SystemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TblAccess__Syste__534D60F1");
            });

            modelBuilder.Entity<TblAnnouncement>(entity =>
            {
                entity.ToTable("TblAnnouncement");

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.CreatedByIpAddress)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedByName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedByUsername)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Enabled)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.LastUpdatedByIpAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedByName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedByUsername)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedDate).HasColumnType("datetime");

                entity.Property(e => e.Message)
                    .IsRequired()
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasMaxLength(256)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TblApprovedRequest>(entity =>
            {
                entity.ToTable("TblApprovedRequest");

                entity.HasIndex(e => e.ApprovedByName, "ix_TblApprovedRequest_ApprovedByName");

                entity.HasIndex(e => e.UserAccessRequestId, "ix_TblApprovedRequest_UserAccessRequestId");

                entity.Property(e => e.ApprovedByIpAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ApprovedByName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ApprovedByUsername)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ApprovedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Enabled)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.LastUpdatedByIpAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedByName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedByUsername)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedDate).HasColumnType("datetime");

                entity.HasOne(d => d.UserAccessRequest)
                    .WithMany(p => p.TblApprovedRequests)
                    .HasForeignKey(d => d.UserAccessRequestId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TblApprov__UserA__5441852A");

                entity.HasOne(d => d.VpApproval)
                    .WithMany(p => p.TblApprovedRequests)
                    .HasForeignKey(d => d.VpApprovalId)
                    .HasConstraintName("FK__TblApprov__VpApp__5535A963");
            });

            modelBuilder.Entity<TblBatch>(entity =>
            {
                entity.ToTable("TblBatch");

                entity.HasIndex(e => e.Active, "ix_TblBatch_Active");

                entity.HasIndex(e => e.CreatedByName, "ix_TblBatch_CreateByName");

                entity.HasIndex(e => e.Enabled, "ix_TblBatch_Enabled");

                entity.Property(e => e.Active)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.CreatedByIpAddress)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedByName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedByUsername)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Enabled)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.LastUpdatedByIpAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedByName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedByUsername)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedDate).HasColumnType("datetime");

                entity.Property(e => e.Name)
                    .HasMaxLength(256)
                    .IsUnicode(false);

                entity.Property(e => e.System)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('All')");
            });

            modelBuilder.Entity<TblChangeRequest>(entity =>
            {
                entity.ToTable("TblChangeRequest");

                entity.HasIndex(e => e.DestinationAccessId, "ix_TblChangeRequest_DestinationAccessId");

                entity.HasIndex(e => e.DestinationSupervisor, "ix_TblChangeRequest_DestinationSupervisor");

                entity.HasIndex(e => e.RequestByName, "ix_TblChangeRequest_RequestByName");

                entity.HasIndex(e => e.RequestTypeId, "ix_TblChangeRequest_RequestTypeId");

                entity.HasIndex(e => e.StatusId, "ix_TblChangeRequest_StatusId");

                entity.HasIndex(e => e.UserAccessRequestId, "ix_TblChangeRequest_UserAccessRequestId");

                entity.Property(e => e.DestinationAccessId)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DestinationSupervisor)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Enabled)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.LastUpdatedByIpAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedByName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedByUsername)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedDate).HasColumnType("datetime");

                entity.Property(e => e.RequestByIpAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RequestByName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RequestByUsername)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RequestDate).HasColumnType("datetime");

                entity.Property(e => e.RequestTypeId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.StatusId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.DestinationAccess)
                    .WithMany(p => p.TblChangeRequests)
                    .HasForeignKey(d => d.DestinationAccessId)
                    .HasConstraintName("FK__TblChange__Desti__5629CD9C");

                entity.HasOne(d => d.RequestType)
                    .WithMany(p => p.TblChangeRequests)
                    .HasForeignKey(d => d.RequestTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TblChange__Reque__571DF1D5");

                entity.HasOne(d => d.Status)
                    .WithMany(p => p.TblChangeRequests)
                    .HasForeignKey(d => d.StatusId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TblChange__Statu__5812160E");

                entity.HasOne(d => d.UserAccessRequest)
                    .WithMany(p => p.TblChangeRequests)
                    .HasForeignKey(d => d.UserAccessRequestId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TblChange__UserA__59063A47");
            });

            modelBuilder.Entity<TblChangeRequestType>(entity =>
            {
                entity.ToTable("TblChangeRequestType");

                entity.Property(e => e.Id)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TblCompletedRequest>(entity =>
            {
                entity.ToTable("TblCompletedRequest");

                entity.HasIndex(e => e.ChangeRequestId, "ix_TblCompletedRequest_ChangeRequestId");

                entity.HasIndex(e => e.CompletedByName, "ix_TblCompletedRequest_CompletedByName");

                entity.HasIndex(e => e.Evidence, "ix_TblCompletedRequest_Evidence");

                entity.Property(e => e.CompletedByIpAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CompletedByName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CompletedByUsername)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CompletedDate).HasColumnType("datetime");

                entity.Property(e => e.CorrectionDate).HasColumnType("datetime");

                entity.Property(e => e.Enabled)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Evidence)
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedByIpAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedByName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedByUsername)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedDate).HasColumnType("datetime");

                entity.Property(e => e.Url)
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.HasOne(d => d.ChangeRequest)
                    .WithMany(p => p.TblCompletedRequests)
                    .HasForeignKey(d => d.ChangeRequestId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TblComple__Chang__59FA5E80");
            });

            modelBuilder.Entity<TblInstance>(entity =>
            {
                entity.ToTable("TblInstance");

                entity.HasIndex(e => e.SystemId, "ix_TblInstance_SystemId");

                entity.Property(e => e.Id)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SystemId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.System)
                    .WithMany(p => p.TblInstances)
                    .HasForeignKey(d => d.SystemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TblInstan__Syste__5AEE82B9");
            });

            modelBuilder.Entity<TblStatus>(entity =>
            {
                entity.ToTable("TblStatus");

                entity.Property(e => e.Id)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TblSystem>(entity =>
            {
                entity.ToTable("TblSystem");

                entity.Property(e => e.Id)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TblUser>(entity =>
            {
                entity.ToTable("TblUser");

                entity.HasIndex(e => e.FullName, "ix_TblUser_FullName");

                entity.HasIndex(e => e.Title, "ix_TblUser_Title");

                entity.Property(e => e.Id)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FullName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Title)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TblUserAccessRequest>(entity =>
            {
                entity.ToTable("TblUserAccessRequest");

                entity.HasIndex(e => e.AccessId, "ix_TblUserAccessRequest_AccessId");

                entity.HasIndex(e => e.AccessId, "ix_TblUserAccessRequest_AccessId_Ext1");

                entity.HasIndex(e => e.BatchId, "ix_TblUserAccessRequest_BatchId");

                entity.HasIndex(e => e.InstanceId, "ix_TblUserAccessRequest_InstanceId");

                entity.HasIndex(e => e.SystemId, "ix_TblUserAccessRequest_SystemId");

                entity.HasIndex(e => e.UserId, "ix_TblUserAccessRequest_UserId");

                entity.Property(e => e.AccessId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Enabled)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.InstanceId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedByIpAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedByName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedByUsername)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedDate).HasColumnType("datetime");

                entity.Property(e => e.StatusId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SystemId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Batch)
                    .WithMany(p => p.TblUserAccessRequests)
                    .HasForeignKey(d => d.BatchId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TblUserAc__Batch__5BE2A6F2");

                entity.HasOne(d => d.Instance)
                    .WithMany(p => p.TblUserAccessRequests)
                    .HasForeignKey(d => d.InstanceId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TblUserAc__Insta__5CD6CB2B");

                entity.HasOne(d => d.Status)
                    .WithMany(p => p.TblUserAccessRequests)
                    .HasForeignKey(d => d.StatusId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TblUserAc__Statu__5DCAEF64");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.TblUserAccessRequests)
                    .HasForeignKey(d => d.SystemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TblUserAc__Syste__5EBF139D");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.TblUserAccessRequests)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TblUserAc__UserI__5FB337D6");
            });

            modelBuilder.Entity<TblUserHierarchy>(entity =>
            {
                entity.HasKey(e => new { e.BatchId, e.UserId })
                    .HasName("PK__TblUserH__8C2D429C26CF46D8");

                entity.ToTable("TblUserHierarchy");

                entity.HasIndex(e => e.ManagerId, "ix_TblUserHierarchy_ManagerId");

                entity.Property(e => e.UserId)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ManagerId)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Batch)
                    .WithMany(p => p.TblUserHierarchies)
                    .HasForeignKey(d => d.BatchId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TblUserHi__Batch__60A75C0F");

                entity.HasOne(d => d.Manager)
                    .WithMany(p => p.TblUserHierarchyManagers)
                    .HasForeignKey(d => d.ManagerId)
                    .HasConstraintName("FK__TblUserHi__Manag__619B8048");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.TblUserHierarchyUsers)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TblUserHi__UserI__628FA481");
            });

            modelBuilder.Entity<TblVpApproval>(entity =>
            {
                entity.ToTable("TblVpApproval");

                entity.HasIndex(e => e.Approved, "ix_TblVpApproval_Approved");

                entity.HasIndex(e => e.ApprovedByName, "ix_TblVpApproval_ApprovedByName");

                entity.HasIndex(e => e.RejectedByName, "ix_TblVpApproval_RejectedByName");

                entity.Property(e => e.ApprovedByIpAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ApprovedByName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ApprovedByUsername)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ApprovedDate).HasColumnType("datetime");

                entity.Property(e => e.Enabled)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.LastUpdatedByIpAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedByName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedByUsername)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedDate).HasColumnType("datetime");

                entity.Property(e => e.RejectedByIpAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RejectedByName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RejectedByUsername)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RejectedDate).HasColumnType("datetime");

                entity.Property(e => e.StatusId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Status)
                    .WithMany(p => p.TblVpApprovals)
                    .HasForeignKey(d => d.StatusId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TblVpAppr__Statu__6383C8BA");
            });

            modelBuilder.Entity<VwActiveUserHierarchy>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VwActiveUserHierarchy");

                entity.Property(e => e.ManagerId)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VwAuditKpi>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VwAuditKpi");

                entity.Property(e => e.FullName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Id)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SystemId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VwAuditKpiBySystem>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VwAuditKpiBySystem");

                entity.Property(e => e.SystemId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VwAuditKpiByUser>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VwAuditKpiByUser");

                entity.Property(e => e.FullName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Id)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VwJobHistory>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VwJobHistory");

                entity.Property(e => e.JobName)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.Property(e => e.StartDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<VwJobStatus>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VwJobStatus");

                entity.Property(e => e.JobName)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.Property(e => e.Server).HasMaxLength(128);

                entity.Property(e => e.StartDate).HasColumnType("datetime");

                entity.Property(e => e.StopDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<VwVpApproval>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VwVpApproval");

                entity.Property(e => e.ApprovedByIpAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ApprovedByName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ApprovedByUsername)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ApprovedDate).HasColumnType("datetime");

                entity.Property(e => e.FullName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.InstanceId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedByIpAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedByName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedByUsername)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedDate).HasColumnType("datetime");

                entity.Property(e => e.RejectedByIpAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RejectedByName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RejectedByUsername)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RejectedDate).HasColumnType("datetime");

                entity.Property(e => e.StatusId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Title)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VwVpApprovalRequired>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VwVpApprovalRequired");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
