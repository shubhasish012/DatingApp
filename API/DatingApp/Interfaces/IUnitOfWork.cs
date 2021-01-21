using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.Interfaces
{
    public interface IUnitOfWork
    {
        IUserRepository UserRepository { get; }

        IMessageRepository MessageRepository { get; }

        ILikeRepository LikeRepository { get; }

        Task<bool> Complete();

        bool HasChanges();
    }
}
